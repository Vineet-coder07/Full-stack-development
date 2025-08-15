const express=require('express');
const app=express();
//sum - get request
app.get("/sum/:a/:b",function(req,res){
    let a=parseInt(req.params.a);
    let b=parseInt(req.params.b);
    res.json({
        answer:a + b,
    })
})
//mulitply-get request
app.get("/multiply/:a/:b",function(req,res){
    let b=req.params.b;
    let a=req.params.a;
    res.json({
        answer:a*b,
    })
})
//subtract-get request
app.get("/subtract/:a/:b",function(req,res){
    let a=req.params.a;
    let b=req.params.b;
    res.json({
        answer:a-b,
    })
})
//divide-get request
app.get("/divide/:a/:b",function(req,res){
    let a=req.params.a;
    let b=req.params.b;
    res.json({
        answer:a/b,
    })
})
app.listen(3000);