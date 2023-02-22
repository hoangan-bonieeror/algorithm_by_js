var array = [43,2,11,61,12,1,55,4]

function Merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    if(left.length == 0) {
        return arr.concat(right);
    } else { return arr.concat(left) }
}

function MergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    const left = array.splice(0, half)
    return Merge(MergeSort(left),MergeSort(array))
  }
console.time('MergeSort');
var sortedArray = MergeSort(array);
console.log(sortedArray);
console.timeEnd('MergeSort');
