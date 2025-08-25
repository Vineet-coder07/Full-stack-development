const express=require("express");
const app=express();
// using json middleare
app.use(express.json());
const user=[{
    name:"Nitin",
    kidneys:[{
        healthy:false

    }]
}];
//GET- how many kidneys are their
app.get("/",function(req,res){
    const nitinkidneys=user[0].kidneys;
    const NumberofKidneys=nitinkidneys.length;
    let numberofHealthykidneys=0;
    for(let i=0;i<nitinkidneys.length;i++){
        if(nitinkidneys[i].healthy){
            numberofHealthykidneys=numberofHealthykidneys+1;
        }
    }
    const numberofUnhealthykidneys=NumberofKidneys-numberofHealthykidneys;
    res.json({
        NumberofKidneys,
        numberofHealthykidneys,
        numberofUnhealthykidneys,
    })
})

//Post - add new kidney
app.post("/",function(req,res){
 const ishealthy=req.body.ishealthy;
 user[0].kidneys.push({
    healthy:ishealthy,
 })
 res.json({
    "msg" : "Done",
 })
})

//Put - replace the added kidney
app.put("/",function(req,res){
    for(let i=0;i<user[0].kidneys;i++){
        user[0].kidneys[i].healthy=true;
    }
    res.json({
        "msg" : "make healthy"
    })
})

app.delete("/",function(req,res){
    const newkidneys=[];
    for(let i=0;i<user[0].kidneys;i++){
        if(user[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    user[0].kidneys=newkidneys;
    res.json({msg: "done"});
})


app.listen(3000,()=>{
    console.log("Server running port 3000");
})