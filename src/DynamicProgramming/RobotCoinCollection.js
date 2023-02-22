const RobotCoinCollection = (A) => {
    const F = new Array(5).fill(0).map(x => Array(6).fill(0))
    F[0][0] = A[0][0];
    for(let j= 1; j<=A[0].length-1;j++) {
        F[0][j] = F[0][j-1] + A[0][j];
    }
    for(let i=1; i<=A.length-1; i++) {

        F[i][0] = F[i-1][0] + A[i][0];
        for(let j=1; j<=A[0].length-1; j++) {
            F[i][j] = Math.max(F[i-1][j], F[i][j-1]) + A[i][j];
        }
    }
    return F;
}


var array = [
    [0,0,0,0,1,0],
    [0,1,0,1,0,0],
    [0,0,0,1,0,1],
    [0,0,1,0,0,1],
    [1,0,0,0,1,0]
]


const findCoin = (F) => {
    var n = F.length-1;
    var m = F[0].length-1;
    var j = m;
    var i = n;
    var coinSelect = [];
    var box = '(' + i.toString() + ',' + j.toString() + ')';
    coinSelect.push(box)
    while(i>=0 && j>=0) {
        console.log(i,j)
        if(i == 0 && j == 1 || i == 1 && j == 0 ) {
            i = 0;
            j = 0;
            box = '(' + i.toString() + ',' + j.toString() + ')';
            coinSelect.push(box)
            break;
        }
        if(F[i][j-1]>=F[i-1][j]) {
            box = '(' + i.toString() + ',' + (j-1).toString() + ')';
            coinSelect.push(box)
            j--;
        } else if (F[i][j-1]<F[i-1][j]) {
            box = '(' + (i-1).toString() + ',' + j.toString() + ')';
            coinSelect.push(box)
            i--;
        }
    }
    return coinSelect;
}

console.time('RobotCoinCollection'); 
var result_arr =  RobotCoinCollection(array);
console.timeEnd('RobotCoinCollection');
console.log(result_arr)


var result = findCoin(result_arr)
console.log(result)
  
