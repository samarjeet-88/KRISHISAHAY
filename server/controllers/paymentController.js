import { instance } from "../index.js";
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken";
const SECRET="MYNAMEISSAMARJEET"
import { RegisterModel } from "../model/Register.js";



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'priyanshupathak500@gmail.com',
    pass: 'yiwg izyd rshr cwtd'
  }
});


export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res) => {


  const token = req.cookies.jwtoken;
  const decoded = jwt.verify(token, SECRET);
  const user = await RegisterModel.findById(decoded._id);

  var mailOptions = {
    from: 'priyanshupathak500@gmail.com',
    to: user.email,
    subject: 'PAYMENT SUCCESSFUL',
    text: `Payment confirmed. Your order has been successfully placed`
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("EMAIL SENT");
    }
})

  res.redirect("http://localhost:3000/paymentsuccess")
};