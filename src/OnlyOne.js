function doQuickSort(array) {
    quickSort(array, 0, array.length - 1);
}

function quickSort(items, l, r) {
    if(l<r) {
        pivotPos = partition(items, l,r);
        quickSort(items,l ,pivotPos-1)
        quickSort(items, pivotPos+1, r);
    }
}

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, l, r) {
    var pivotPos = l;
    swap(items,pivotPos, r)
    var leftwall = l;
    for(let i=l; i<r; i++) {
        if(items[i]<=items[r]){
            swap(items,i,leftwall)
            leftwall++
        }
    }
    swap(items,leftwall, r)
    return leftwall;   
}



function PresortElementUniqueness(A) {
    doQuickSort(A);
    for(let i=0; i<A.length-1; i++) {
        if(A[i] == A[i+1]) {
            return false;
        }
    }
    return true;
}


var array = [4,2,5,6,9,10,3,1]

console.time('PresortElementUniqueness');
var isUnique = PresortElementUniqueness(array)
console.log(isUnique)
console.timeEnd('PresortElementUniqueness');