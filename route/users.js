const express=require("express");
const route=express.Router();

const User=require("../model/users.js");
const { json }=require("body-parser");
const { model } = require("mongoose");

  route.get('/getAll',async(req,res)=>{
    try{
        const UserData=await User.find();
        res.json(UserData);
    }catch(error)
    {
        res.status(500).json({message:error.message})
    }

    })
    route.post("/postAll",async(req,res)=>{
        const detail=new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            address:req.body.address,
            phone_number:req.body.phone_number,


        })
        try{
            const dataToSave=await detail.save();
            res.status(200).json(dataToSave);

        }catch(error){
            res.status(400).json({message:error.message})
        }
    })
    route.get("/getOne/:id", async (req, res) => {
        try{
        const post = await User.findOne({ _id: req.params.id })
        res.json(post)
    }
    catch {
		res.status(404)
		res.json({ error: "Post doesn't exist!" })
	}
    })
    
    route.patch('/update/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };
    
            const result = await User.findByIdAndUpdate(
                id, updatedData, options
            )
    
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    })
    //Delete by ID Method
route.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id);
        res.send(`Document with ${data.username} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports=route