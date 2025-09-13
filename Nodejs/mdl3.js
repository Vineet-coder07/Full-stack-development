const express=require("express");
const app=express();
function isoldEnoughMiddleare(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }
    else{
        msg : "sorry you are not fit of age"
    }
}
    app.use(isoldEnoughMiddleare);
    app.get("/ride1",function(req,res){
   res.json({
    msg : "reAady for ride1"
   })
})
app.get("/ride2",function(req,res){
    res.json({
        msg : "ready for ride 2"
    })
})
app.listen(3000);