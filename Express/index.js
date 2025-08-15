const express = require('express');
const app=express();
var users=[{
    name:"patient",
    kidneys:[{
        healthy:true,
    },{
        healthy:false,
    }]
}]
 
// how much kidneys-get
app.get('/',function(req,res){
  const patientkidenys=users[0].kidneys;
  let noofkidneys=patientkidenys.length;
  let nofhealthykidneys=0;
  for(let i=0;i<patientkidenys.length;i++){
    if(patientkidenys[i].healthy){
        nofhealthykidneys++;
    }
  }
  let nofunhealthykidneys=noofkidneys-nofhealthykidneys;
  res.json({
    noofkidneys,
    nofhealthykidneys,
    nofunhealthykidneys,
  })
})

app.use(express.json());

//adding new kidney-post
app.post("/",function(req,res){

    const ishealthy=req.query.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        mas:"Done",
    })
})

// replace kidney-put
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})

// reoving kidney-delete
app.delete("/",function(req,res){
    // not have any unhealthy kidney
    //should return 411 error code
    // only if unhealthy kidney do this else return 411
    if(AtleastOneunhealthykidney()){
        const newkidneys={};
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            healthy:true
        }
    }
    users[0].kidneys=newkidneys;
    res.json({msg:"Done"})
}
else{
    res.status(411).json({
        msg:"You have no bad kidneys"
    });
}
})
function AtleastOneunhealthykidney(){
    let AtleastOneunhealthykidney=false
        for(let i=0;i<users[0].kidneys[i].length;i++){            
            if(!users[0].kidneys[i].healthy){
                AtleastOneunhealthykidney=true;
            }
        }
        return AtleastOneunhealthykidney;
    }

app.listen(3000);