const jwt=require("jsonwebtoken");
// decode, verify , generate
const value={
    name:"vineet",
    accountnumber: 12323457
}
//jwt 
const token=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmluZWV0IiwiYWNjb3VudG51bWJlciI6MTIzMjM0NTcsImlhdCI6MTc1Nzc1NDM2NX0.9mOJiB-50KX5tj3LSCecQFzZ9akmk_pUmarEdRoU3Cw","secret");
console.log(token);
//this you jwt
/*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmluZWV0IiwiYWNjb3VudG51bWJlciI6MTIzMjM0NTcsImlhdCI6MTc1Nzc1MzQ5Nn0.xRjTSwC1SWixmAm0csJZLKAsOvGaJZdG-a-jKV517EE*/
