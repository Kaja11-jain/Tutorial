require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://Kajaljain:607t77vKx1Puh9jx@cluster0.bvczz0u.mongodb.net/Tutorial',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connection done");
})

const userroute=require("./route/users")
const productroute=require("./route/product")
const detailroute=require("./route/detail")

const app=express();
app.use(express.json());

app.use("/api",userroute)
app.use("/api",productroute)
app.use("/api",detailroute)
app.listen(2000,()=>{
    console.log("My server is ready !");

})