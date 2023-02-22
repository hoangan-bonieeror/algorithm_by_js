const CoinRow = (array) => {
    array.unshift(undefined)
    var F = [];
    F.push(0);
    F.push(array[1])
    for(let i=2; i<=array.length-1; i++) {
        F[i] = Math.max(array[i]+F[i-2], F[i-1])
    }
    return F;
}

var array = [5,1,2,10,6,2]
var array_1 = [4,15,21,19,9,1,3,10]

console.time('CoinRow');
var result = CoinRow(array_1);
console.log(result);
console.timeEnd('CoinRow');


function findBack_Trace(A,F) {
    var coinSelect = [];
    var i = A.length-1;
    while(i>=0 && i<A.length) {
        if(i == 1) {
            coinSelect.push(i);
            break;
        }
        if((A[i]+F[i-2])>F[i-1]) {
            coinSelect.push(i)
            i = i - 2
        } else {
            i--
        }
    }
    coinSelect.reverse();
    return coinSelect;
}

var coin = findBack_Trace(array_1,result);

console.log("Coin positions are chosen : ",coin)