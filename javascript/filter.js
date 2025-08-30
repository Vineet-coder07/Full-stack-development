// given array try give only even numbers
const Arr=[1,2,3,4,5];
// const newArr=[];
// for(let i=0;i<Arr.length;i++){
//     if(Arr[i] % 2 == 0){
//         newArr.push(Arr[i]);
//     }
// }
// console.log(newArr);
//using filter
const ans = Arr.filter((n)=>{
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);