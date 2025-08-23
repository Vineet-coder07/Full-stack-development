function asyncfunction(){
    let p=new Promise(function(resolve){
        setTimeout(function(){
        resolve("hi there");
        },2000);
    });
    return p;
}
async function main() {
    let value= await asyncfunction();
        console.log(value);
      
}
main();