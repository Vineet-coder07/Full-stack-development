const express=require("express");
const app=express();
const z = require("zod");
// user auth middleares

function usermiddleare(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    if(username != "vineet" && password != "pass"){
        res.status(403).json({
            msg :"wrong inputs",
        })
    } else{
        next();
    }
}

// kidney middleares

function kindneyCheckMiddleares(req,res,next){
    const kidneyid=req.query.kidneyid;
    if(kidneyid != 1 && kidneyid !=2){
        res.status(411).json({
            msg : "Something wrong with kidney"
        })
    } else{
        next();
    }
}

app.get("/user-checkup",usermiddleare,kindneyCheckMiddleares,function(req,res){
    
    res.json({
        msg : "you are good to go",
    })
})

app.get("/kidney-checkup",kindneyCheckMiddleares,function(req,res){
   
    res.json({
        msg : "you are good to go",
    })
})

app.listen(3000);