// creating a server for hospital
const express=require("express");
const app=express();
const users=[];
let ans=0;
function sum(n){
    for(let i=0;i<n;i++){
        ans = ans+i;
    }
    return ans;
}
app.get("/",function(req,res){
    const n= req.query.n;
    const ans=sum(n);
    res.send({
        "meassage " : ans, 
    })
});

app.listen(3000);

