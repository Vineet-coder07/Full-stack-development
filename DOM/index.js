const express = require("express");
const cors=require("cors");
const app = express();
app.use(cors());
app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // 🚫 Disable caching to prevent 304
  // res.setHeader("Cache-Control", "no-store");

    res.send((a + b).toString());
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
