
function fibonnacci(n) {
    if(n<2) { return 1; }
    return fibonnacci(n-1) + fibonnacci(n-2);
}

console.time('fibonnaci'); 
var result =  fibonnacci(6);
console.timeEnd('fibonnaci');
console.log(result)