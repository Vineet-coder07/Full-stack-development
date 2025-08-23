// function myOwnSetTimeout(callback , duration){
//     setTimeout(callback,duration);
// }

// promise is a class
function promisifiedMyOwnSetTimeout(duration){
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
    return p;
}

// myOwnSetTimeout(function(){
//     console.log("after setTimeout ");
// },1000);

const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function(){
    console.log("timeout is done ");
})