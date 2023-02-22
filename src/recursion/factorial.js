
 function factorial(n) {
    if(n<2) { return 1; }
    return n*factorial(n-1);
}



console.time('Factorial'); 
var result =  factorial(6);
console.timeEnd('Factorial');
console.log(result)