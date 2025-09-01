// Middleares and Global catches (ugly way)
const express=require("express");
const app=express();
app.get("/health-checkup",function(req,res){
    const username =req.headers.username;
    const password=req.headers.password;
    const kidneyid=req.query.kidneyid;
    if(username != "vineet" || password != "pass"){
        res.status(400).json({
            "msg" : "something up with your inputs"
        })
        return
    }
    if(kidneyid !=1 && kidneyid !=2){
        res.status(400).json({
            "msg":"something wrong with your inputs"
        })
    }
    // do something with kidney
    res.json({
        msg:"Your kidney is fine"
    })
});

app.listen(3000);
// writing this checking functions checks will make this code ugly
// solutiomn to this problem creat a func at top and called when  when in any route
