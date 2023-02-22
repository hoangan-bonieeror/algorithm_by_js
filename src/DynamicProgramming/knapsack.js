var w = [2,1,3,2];
var v = [12,10,20,15];

const knapsack = (v,w,W) => {
    var F = new Array(v.length+1).fill(0).map(x => Array(W+1).fill(0))
    w.unshift(0);
    v.unshift(0);
    for(let i=1; i<=v.length-1; i++) {
        for(let j=1; j<=W; j++) {
            if(j-w[i]>=0) {
                F[i][j] = Math.max(F[i-1][j], v[i]+ F[i-1][j-w[i]])
            } else {
                F[i][j] = F[i-1][j];
            }
        }
    }
    return F;
}


const findStuff = (F) => {
    var n = F.length-1;
    var m = F[0].length-1;
    var j = m;
    var i = n;
    var stuffSelect = [];
    while(i>=1 && j>=1) {   
        if(F[i][j]>F[i-1][j]) {
            stuffSelect.push(i)
            j -= w[i]
            i--;
        } else {
            i--;
        } 
    }
    return stuffSelect.reverse();
}

console.time('knapsack'); 
var result_arr =  knapsack(v,w,5);
console.timeEnd('knapsack');
console.log(result_arr)

var result = findStuff(result_arr)
console.log(result)

