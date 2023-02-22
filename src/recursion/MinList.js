function MinList(A) {
    if(A.length == 1) { 
        return A[0];
      } 
    else {
        var half = A.length/2;
        var left = MinList(A.splice(0, half));
        var right = MinList(A);
        return Math.min(left,right);      
    }
}

var array = [43,2,11,61,12,1,55,4]

console.time('MinList');
var result = MinList(array);
console.log(result);
console.timeEnd('MinList');
