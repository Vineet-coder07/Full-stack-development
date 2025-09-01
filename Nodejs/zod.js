const zod=require("zod");

function validate(n){
    const schema = zod.object({
        email : zod.string().email(),
        password:zod.string().min(8)
    })
}
