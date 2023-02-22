function MaxElement(A) {
    if(A.length == 1) { 
        return A[0];
      } 
    else {
        var half = A.length/2;
        var left = MaxElement(A.splice(0, half));
        var right = MaxElement(A);
        return Math.max(left,right);      
    }
}

function MaxList(A) {
    const array = Array.from(A);
    const maxElement = MaxElement(A);
    return array.indexOf(maxElement);

}

var array = [43,2,11,61,12,1,55,4]

console.time('MaxList');
var result = MaxList(array);
console.log(result);
console.timeEnd('MaxList');

