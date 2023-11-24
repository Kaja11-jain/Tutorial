const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const detailSchema=new Schema({
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        prodDescription:{
            
            type:String,
            required:true,
            maxLength:15
        },
        prodName:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
       
        status:{
            type:Boolean
        }
        },
        {
           timestamps:true
        
    });
    
  module.exports=mongoose.model('detail',detailSchema);
