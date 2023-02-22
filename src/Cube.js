function Sum(n) {
    var s = 0;
    for(let i=1; i<=n; i++) {
        s = s + i*i*i;
    }
    return s;
}

console.time('SumCube');
var result = Sum(2);
console.log(result);
console.timeEnd('SumCube');