import mongoose from "mongoose";
const ItemListSchema=new mongoose.Schema({
    image:String,
    itemid:String,
    itemname:String,
    price:String,
    quantity:String,
    description:String,

})

export const ItemListModel=mongoose.model("itemdetails",ItemListSchema)
// module.exports=ItemListModel