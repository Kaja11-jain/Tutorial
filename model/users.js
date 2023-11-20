const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    //_id:mongoose.Schema.Types.ObjectId,
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        first_name:{
            type:String,
            required:true
        },
        last_name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phone_number:{
            type:Number,
            required:true
        }
    });
    module.exports=mongoose.model('User',userSchema);