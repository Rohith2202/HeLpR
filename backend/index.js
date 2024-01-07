const express=require('express');
const mongoose=require('mongoose');
const PostModel=require('./models/post');
var cors=require('cors');
mongoose.connect('mongodb://localhost:27017/test')
const app=express();
app.use(express.json())
const routes=require("./routes/route")
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use("/",routes)
app.listen(5000,()=>{
    console.log("LISTENING")
})