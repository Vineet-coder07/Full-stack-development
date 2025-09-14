const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:vineet23@cluster0.6rovoie.mongodb.net/user_app")
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error(err));

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String
});

app.post("/signup", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({ message: "✅ User created successfully", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});
