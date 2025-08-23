// Promise clas can have 3 states pending , resovle and reject.
var d=new Promise(function(resolve){
setTimeout(resolve,2000);
});
const value = d;
value.then(function(){
    console.log("hi there");
})