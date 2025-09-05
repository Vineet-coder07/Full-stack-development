const express=require('express')
const jwt=require('jsonwebtoken')
const jwtPassword="123456";
const app=express();
const ALL_USERS=[
    {
        username:"raman123@gmail.com",
        password:"123",
        name:"Raman Singh"
    },
    {
        username:"ranmandeep345@gmail.com",
        password:"2345",
        name:"Ramandeep"
    },
    {
        username:"priyanka@gmail.com",
        password:"34567",
        name:"Priyanka Singh"
    },
];
function userExists(username,password){
    const userExists=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists=true;
        }
    }
    return userExists;
}

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExists(username,password)){
         res.status(403).json({
            msg:"user doesnot exist",
         })
    }
    var token=jwt.sign({
        username:username
    },jwtPassword);
    res.json({
        token,
    })
})