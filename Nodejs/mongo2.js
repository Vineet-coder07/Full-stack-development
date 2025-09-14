const mongoose=require("mongoose");
const express=require("express");
const app=express();
app.use(express.json());
const { email, json } = require("zod");
mongoose.connect("mongodb+srv://admin:vineet23@cluster0.6rovoie.mongodb.net/user_app")
const User=mongoose.model("Users",{name : String,email : String,password : String});
const user = new User({
    name: "Raman",
    email : "raman345@gmail.com",
    password : "rtttest23"
})
user.save();



