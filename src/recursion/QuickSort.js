async function doQuickSort(array, result) {
    await quickSort(array, 0, array.length - 1);
    result(array);
}

async function quickSort(items, l, r) {
    if(l<r) {
        pivotPos = await partition(items, l,r);
        await quickSort(items,l ,pivotPos-1)
        await quickSort(items, pivotPos+1, r);
    }
}

function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
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

const array = [5,1,3,2,9];
// const array = [1,2,3,5,9];

console.time('QuickSort');
doQuickSort(array, (result)=> {console.log(result)});  
console.timeEnd('QuickSort');

