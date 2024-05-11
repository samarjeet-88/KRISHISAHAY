import nodemailer from "nodemailer"
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import {RegisterModel} from "./model/Register.js";
import {ShopListModel} from "./model/ListShopModel.js";
import {ItemListModel} from "./model/ItemModel.js";
import multer from "multer";
import path from "path";
import cookieParser from "cookie-parser";


const SECRET="MYNAMEISSAMARJEET"

import paymentRoute from "./routes/paymentRoutes.js";

config({ path: "./config/config.env" });


const app=express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
}));
app.use(cookieParser());

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'priyanshupathak500@gmail.com',
      pass: 'yiwg izyd rshr cwtd'
    }
  });



app.post('/sign', (req, res) => {
    const { username } = req.body;
    
    RegisterModel.findOne({ username: username })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ error: 'Username already exists' });
            } else {
                RegisterModel.create(req.body)
                    .then(register => res.json(register))
                    .catch(err => res.status(500).json(err));
            }
        })
        .catch(err => res.status(500).json(err));
});




app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await RegisterModel.findOne({ username: username });
        if (user) {
            if (user.password === password) {
                const token = await user.generateAuthToken();

                res.cookie('jwtoken', token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 1800000), // 30 minutes
                    sameSite: 'None',
                    secure: true, 
                    path: '/',
                });

                res.json({ success: true, message: "Login successful", token });
            } else {
                res.status(401).json({ success: false, message: "The password is incorrect" });
            }
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});



app.post('/logout', async (req, res) => {
    try {
        res.clearCookie('jwtoken', {
            httpOnly: true,
            sameSite: 'None',
            secure: true,
            path: '/',
        });

        // Checking if cookie is cleared out
        const hasCookie = req.headers.cookie && req.headers.cookie.includes('jwtoken=');
        if (hasCookie) {
            console.error('Cookie might not be cleared successfully');
        } else {
            console.log('Cookie cleared successfully');
        }

        res.json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
        console.error('Error clearing cookie:', error);
        res.status(500).json({ success: false, message: 'Logout failed' });
    }
});




app.use(express.static('public'))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const image = req.file.filename;
        const formData = req.body;

        const shopData = {
            image: image,
            shopname: formData.shopname,
            ownername: formData.ownername,
            phonenumber: formData.phonenumber,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            upi: formData.upi,
            email: formData.email,
            shopid:formData.shopid,
            passwordshop:formData.passwordshop,
            items:formData.items
        };
        const result = await ShopListModel.create(shopData);
        // console.log(req.cookies);
        const token = req.cookies.jwtoken;
        // console.log(token);
        const decoded = jwt.verify(token, SECRET);
        const user = await RegisterModel.findById(decoded._id);
        if (user) {
            var mailOptions = {
                from: 'priyanshupathak500@gmail.com',
                to: req.body.email,
                subject: 'SHOP DETAILS',
                text: `These are your Shop details. Please do not share it with anyone
                ShopId : ${req.body.shopid} 
                ShopPassword: ${req.body.passwordshop}`
            };
            transporter.sendMail(mailOptions,function(error,info){
                if(error){
                    console.log(error);
                }else{
                    console.log("EMAIL SENT");
                }
            })
             user.shop.push({ shopid: formData.shopid });
             await user.save();
        }

        res.status(200).json(result);
    } catch (err) {
        console.error('Error uploading file and data:', err);
        res.status(500).json({ error: 'Upload failed' });
    }
});


app.get('/shoplisting', async (req, res) => {
    try {
        const shops = await ShopListModel.find();
        res.json(shops);
    } catch (error) {
        console.error('Error fetching shops:', error);
        res.status(500).json({ error: 'Failed to fetch shops' });
    }
});


app.get('/mystore', async (req, res) => {
    try {
        const token = req.cookies.jwtoken;
        const decoded = jwt.verify(token, SECRET);
        const user = await RegisterModel.findById(decoded._id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const shopIds = user.shop.map(shop => shop.shopid);
        const shops = await ShopListModel.find({ shopid: { $in: shopIds } });

        res.json(shops);
    } catch (error) {
        console.error('Error fetching shops:', error);
        res.status(500).json({ error: 'Failed to fetch shops' });
    }
});


app.get('/store/:id', async (req, res) => {
    try {
        const storeId = req.params.id;
        const store = await ShopListModel.findById(storeId);
        if (!store) {
            return res.status(404).json({ error: 'Store not found' });
        }
        res.json(store);
    } catch (error) {
        console.error('Error fetching store:', error);
        res.status(500).json({ error: 'Failed to fetch store' });
    }
});



app.post('/additems', upload.single('file'), async (req, res) => {
    try {
        const shopid= req.body.shopid;
        const image = req.file.filename;
        const formData = req.body;
        const newItem = {
            image: image,
            itemname:formData.itemname,
            quantity:formData.quantity,
            price:formData.price,
            description:formData.description,
            itemid:formData.itemid
        };
        const shop = await ShopListModel.findById(shopid);
        // const itemspecific = await ItemListModel.create(shopData);
        const createdItem = await ItemListModel.create(newItem);
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }
        shop.items.push(newItem);
        await shop.save();
      res.status(201).json({ message: 'Item added successfully!' });
    } catch (error) {
      console.error('Error adding item:', error);
      res.status(500).json({ message: 'Failed to add item.' });
    }
  });




app.patch('/item', async (req, res) => {
    const { itemid, price } = req.body;
  
    try {
      const shop = await ShopListModel.findOneAndUpdate(
        { 'items.itemid': itemid },
        { $set: { 'items.$.price': price } },
        { new: true } 
      );
  
      if (!shop) {
        return res.status(404).json({ error: 'Shop or item not found' });
      }
  
      const updatedItem = shop.items.find(item => item.itemid === itemid);

      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.status(200).json(updatedItem);
    } catch (error) {
      console.error('Error updating item price:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.delete('/item', async (req, res) => {
    const { itemid } = req.body;
    console.log('Deleting item with id:', itemid);
    try {
      const result = await ShopListModel.updateOne(
        { 'items.itemid': itemid },
        { $pull: { items: { itemid } } }
      );
  
      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: 'Shop or item not found' });
      }
  
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.get('/shoplisting/:id', async (req, res) => {
    try {
        const shopId = req.params.id;
        console.log(shopId);
        console.log('Request Params:', req.params);
        const shop = await ShopListModel.findById(shopId);
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }
        res.json(shop);
    } catch (error) {
        console.error('Error fetching shop items:', error);
        res.status(500).json({ error: 'Failed to fetch shop items' });
    }
});

app.get('/compare', async (req, res) => {
    const { itemName } = req.query;
  
    if (!itemName) {
      return res.status(400).json({ error: 'Missing item name' });
    }
  
    try {
      const shopsWithItem = await ShopListModel.find({ 'items.itemname': itemName });
  
      if (!shopsWithItem.length) {
        return res.status(404).json({ error: 'Item not found in any shop lists' });
      }
      const allItems = shopsWithItem.flatMap(shopList => shopList.items.filter(item => item.itemname === itemName));
  
      const sortedItems = allItems.sort((a, b) => a.price - b.price);
  
      res.status(200).json(sortedItems);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export const instance = new Razorpay({
    key_id: "rzp_test_eKUZga7kYRh5td",
    key_secret: "X71H3Jw582TzemTjZBBjxai5",
  });

app.use("/api", paymentRoute);
app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: "rzp_test_eKUZga7kYRh5td" })
);




mongoose.connect("mongodb://localhost:27017/KRISHISAHAY");
app.listen(3002,()=>{
    console.log("server is running");
})