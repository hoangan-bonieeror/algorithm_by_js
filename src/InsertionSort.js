let InsertionSort = (arr, n = arr.length) => {
    for(let i = 1; i < n; i++){
      let key = arr[i];
      let j = i - 1;
        
      //Sort in the ascending order
      while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j = j - 1;
      }
        
      arr[j + 1] = key;
    }
  
  return arr;
}


var array = [4,2,5,6,9,10,3,1]

console.time('InsertionSort');
var sortedArray = InsertionSort(array)
console.log(sortedArray)
console.timeEnd('InsertionSort');