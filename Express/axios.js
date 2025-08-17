const axios = require("axios");
async function main(){
    const response = await axios.put(
        "https://httpdump.app/dumps/f38e7c92-1d76-47e3-ae3f-485f7e198c12",{
            username : "raj",
            password : 1234,
        },
        {
            headers: {
                Aurrhorization : "Bearer 123",
            },
        },
    );
    console.log(response.data);
}
main();