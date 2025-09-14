const mongoose=require("mongoose");
const express=require("express");
const app=express();
app.use(express.json());
const { email, json } = require("zod");
const blogSchema = new mongoose.Schema({
name:String,
email:String,
password:String
})
mongoose.connect("mongodb+srv://admin:vineet23@cluster0.6rovoie.mongodb.net/user_app")
const User=mongoose.model("Users",blogSchema);
app.post("/signup", async function (req, res) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("❌ Email already exists");
    }

    const user = new User({ name, email, password });
    await user.save();

    return res.json({ message: "✅ User created successfully", user });
  } catch (err) {
    console.error("❌ Error in signup:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});
app.listen(3000);


