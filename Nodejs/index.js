const express=require("express");
const app=express();
app.use(express.json());
const port=process.env.GET || 3000;
app.get("/conversations",function(req,res){
    console.log(req.body);
    res.send({
        msg : "2 + 2 = 5"
    });
});




app.listen(3000 , ()=>{
    console.log("server running on port 3000");
})