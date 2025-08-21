// function of function
function square(n){
    return n* n;
}
function sumofsqaure(a,b){
    const val1 = square(a);
    const val2= square(b);
    const val3 = 2 *a*b;
    return val1+val2+val3;
}
console.log(sumofsqaure(3,4));