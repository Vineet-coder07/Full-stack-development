const jwt=require("jsonwebtoken");
// decode, verify , generate
const value={
    name:"vineet",
    accountnumber: 12323457
}
const newtoken=jwt.sign(value,"secret233")
console.log(newtoken);
// this intruder jwt
/*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmluZWV0IiwiYWNjb3VudG51bWJlciI6MTIzMjM0NTcsImlhdCI6MTc1Nzc1NDQzMn0.UdO8WPPDjL0XyWIu3CG-gcNFbdE1_qCowf8GoEvqER0*/