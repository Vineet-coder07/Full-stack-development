const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());
const schema= zod.array(zod.number());

app.post("/health-check",function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg : "input is not valid"
        })
    } else{
    res.send({
        response
})
    }
});

// global catches


app.listen(3000);