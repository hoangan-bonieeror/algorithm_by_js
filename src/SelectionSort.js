var array = [43,2,11,61,12,1,55,4];

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function SelectionSort(array) {
    if(array.length == 1) { return array; }

    for(let i = 0; i<=array.length-2 ; i++) {
        var min = i;
        for(let j=i+1; j<=array.length-1; j++) {
            if(array[j]<array[min]) {
                min = j;
            }
        }
        swap(array,i,min)
    }

    return array;
}

console.time('SelectionSort');
var sortedArray = SelectionSort(array);
console.log(sortedArray);
console.timeEnd('SelectionSort');