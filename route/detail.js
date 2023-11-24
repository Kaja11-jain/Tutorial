const express=require("express");
const route=express.Router();


const { json }=require("body-parser");
const { model } = require("mongoose");
const detail = require("../model/detail.js");
  
    route.get('/detailAll',async(req,res)=>{
        try{
            const DetailData=await detail.find();
            res.json(DetailData);
        }catch(error)
        {
            res.status(500).json({message:error.message})
        }
    
        })
        route.post("/detail",async(req,res)=>{
            const get=new detail({
                productId:req.body.productId,
                userId:req.body.userId,
                prodDescription:req.body.prodDescription,
                prodName:req.body.prodName,
                price:req.body.price,
                status:req.body.status
    
    
            })
            try{
                const dataSave=await get.save();
                res.status(200).json(dataSave);
    
            }catch(error){
                res.status(400).json({message:error.message})
            }
           
            
        })
        route.get("/detailOne/:id", async (req, res) => {
            try{
            const post = await detail.findOne({ _id: req.params.id })
            res.json(post)
        }
        catch {
            res.status(404)
            res.json({ error: "Post doesn't exist!" })
        }
        })
        
        module.exports=route