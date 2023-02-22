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

function CheckSumElementEqualKey(A,S,result) {
    doQuickSort(A,(sortedArray)=> {
        console.log(sortedArray)
        for(let i=0; i<=sortedArray.length-1;i++) {
            var p = S - sortedArray[i];
            if(p == sortedArray[i+1]) {
                result(true);
                return;
            } else {
                var x = BinarySearch(sortedArray,sortedArray.length-1,p)
                if(x!==(-1)) {
                    result(true);
                    return;
                }
            }
        }
        result(false);
    })
}


async function BruteForce(A,S,result) {
    var n = A.length-1;
    if(n==1) {
        result(false);
        return;
    } else {
        for(let i=0; i<=n-1;i++){
            for(let j=i+1; j<=n;j++) {
                if(A[i]+A[j]=== S) {
                    result(true);
                    return;
                }
            }
        }
        result(false);
        return;
    }
}


var array = [5,1,1,2,9];
console.time('CheckSumElementEqualKey');
CheckSumElementEqualKey(array,3,(result)=>{
    console.log(result)
})
// BruteForce(array,5,(result)=>{
//     console.log(result)
// })
console.timeEnd('CheckSumElementEqualKey');