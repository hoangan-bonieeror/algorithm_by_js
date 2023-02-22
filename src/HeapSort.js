
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}


function MaxHeapify(A,n,i) {
    var largest = i;
    var l = 2*i+1;
    var r = 2*i+2;
    if(l<n && A[l]>A[i]) {
        largest = l;
    } else { largest = i; }
    if(r<n && A[r]> A[largest]) {
        largest =r;
    }
    if(largest !== i) {
        swap(A,i,largest);
        MaxHeapify(A,n,largest)
    }
}

function BuildMaxHeap(A,n) {
    for(let i = parseInt(n/2-1); i>=0; i--) {
        MaxHeapify(A,n,i)
    }
}

function MinHeapify(A,n,i) {
    var smallest = i;
    var l = 2*i+1;
    var r = 2*i+2;
    if(l<n && A[l]<A[i]) {
        smallest = l;
    } else { smallest = i; }
    if(r<n && A[r]< A[smallest]) {
        smallest =r;
    }
    if(smallest !== i) {
        swap(A,i,smallest);
        MinHeapify(A,n,smallest)
    }
}

function BuildMinHeap(A,n) {
    for(let i = parseInt(n/2-1); i>=0; i--) {
        MinHeapify(A,n,i)
    }
}

function HeapSort(A,n) {
    BuildMinHeap(A,n)
    console.log(A)
    for(let i=n-1;i>=0;i--){
        swap(A,0,i);
        MinHeapify(A,i,0)
    }
}



var array = [4,2,5,6,9,10,3,1]
console.time('HeapSort');
HeapSort(array,array.length)
// console.log(array)
console.timeEnd('HeapSort');
