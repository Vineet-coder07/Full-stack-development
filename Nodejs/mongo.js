const mongoose=require("mongoose");
const express=require("express");
const app=express();
app.use(express.json());
const { email, json } = require("zod");
mongoose.connect("mongodb+srv://admin:vineet23@cluster0.6rovoie.mongodb.net/user_app")
const User=mongoose.model("Users",{name : String,email : String,password : String});
app.post("/singup",async function(req,res){
const username = req.body.username;
const password=req.body.password;
const name=req.body.name;
const ExistingUser = await User.findOne({email : username})
  if(ExistingUser){
    return res.sendStatus(400).send("username already exist");
  }
  const user= new User({
  name : name,
  email:username,
  password:password
})
user.save();
})
app.listen(3000);

