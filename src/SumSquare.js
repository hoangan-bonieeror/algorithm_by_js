function Sum(n) {
    var s = 0;
    for(let i=1; i<=n; i++) {
        s = s + i*i;
    }
    return s;
}

console.time('SumSquare');
var result = Sum(5);
console.log(result);
console.timeEnd('SumSquare');