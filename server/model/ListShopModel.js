import mongoose from "mongoose";
const ShopListSchema=new mongoose.Schema({
    image:String,
    shopname:String,
    ownersname:String,
    phonenumber:String,
    address:String,
    city:String,
    state:String,
    upi:String,
    email:String,
    shopid:String,
    passwordshop:String,
    items:[
        {}
    ]
})

export const ShopListModel=mongoose.model("shopdetails",ShopListSchema)
