function Exp(a,n) {
    if(n==0) {
        return 1;
    } 
    if(n%2 ==0) {
        var p = Exp(a,n/2);
        return p*p;
    } else {
        var p = Exp(a,(n-1)/2);
        return p*p*a;
    }
}

console.time('Exp');
var result = Exp(5,2);
console.log(result);
console.timeEnd('Exp');