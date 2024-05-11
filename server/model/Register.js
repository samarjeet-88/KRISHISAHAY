// const jwt=require("jsonwebtoken")
import jwt from "jsonwebtoken";
// require("dotenv").config();
// const SECRET=process.env.SECRET_KEY
const SECRET="MYNAMEISSAMARJEET"

import mongoose from "mongoose";

const RegisterSchema=new mongoose.Schema({
    username:String,
    password:String,
    aadhar_number:String,
    mobile_number:String,
    address:String,
    state:String,
    fullname:String,
    email:String,
    shop:[{}]
})

RegisterSchema.methods.generateAuthToken=async function(){
    try{
        let token=jwt.sign({_id:this._id},SECRET);
        await this.save();
        return token;
    }catch(err){
        console.error('Error generating auth token:', err);
        throw err; 
    }
}

export const RegisterModel=mongoose.model("registers",RegisterSchema)
// module.exports=RegisterModel