function BinarySearch(A,n,K) {
    var l = 0;
    var r = n-1;
    while(l<=r) {
        var m = Math.floor((l+r)/2);
        if(K==A[m]) {
            return m;
        } else {
            if(K<A[m]) {
                r = m - 1
            } else { l = m+1 }
        }
    }
    return -1;
}

var array = [2,7,1,9,4,5]
var sortedArray = array.sort();
console.log(sortedArray)
console.time('BinarySearch');
var result = BinarySearch(sortedArray,sortedArray.length,7);
console.timeEnd('BinarySearch');

console.log('K : 7');
console.log('Position : ',result);