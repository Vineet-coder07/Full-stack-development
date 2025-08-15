const chalk=require('chalk');
console.log(chalk);
function sum(a,b){
    return a+b;
}
function multi(a,b){
    return a*b;
}
console.log(sum(1,2));
console.log(multi(4,5));
console.log(__dirname);
const path=require("path");