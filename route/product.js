const express=require("express");
const route=express.Router();


const { json }=require("body-parser");
const { model } = require("mongoose");
const product = require("../model/product.js");
  
    route.get('/setAll',async(req,res)=>{
        try{
            const ProductData=await product.find();
            res.json(ProductData);
        }catch(error)
        {
            res.status(500).json({message:error.message})
        }
    
        })
        route.post("/set",async(req,res)=>{
            const get=new product({
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                stock_quantity:req.body.stock_quantity,
                brand:req.body.brand,
                category_id:req.body.category_id,
    
    
            })
            try{
                const dataSave=await get.save();
                res.status(200).json(dataSave);
    
            }catch(error){
                res.status(400).json({message:error.message})
            }
           
            
        })
        route.get("/setOne/:id", async (req, res) => {
            try{
            const post = await product.findOne({ _id: req.params.id })
            res.json(post)
        }
        catch {
            res.status(404)
            res.json({ error: "Post doesn't exist!" })
        }
        })
        
        route.patch('/updateSet/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const updatedData = req.body;
                const options = { new: true };
        
                const result = await product.findByIdAndUpdate(
                    id, updatedData, options
                )
        
                res.send(result)
            }
            catch (error) {
                res.status(400).json({ message: error.message })
            }
        })
        //Delete by ID Method
    route.delete('/deleteAll/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const data = await product.findByIdAndDelete(id)
            res.send(`Document with ${data.name} has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    })
module.exports=route