const array = ['A', 'A', 'A', 'B', 'B', 'C', 'D',"A"]

function sumChar(array) {
    let result = '';
    let sum = 1;
    
    array.sort()

    let i = 0;
    let j = i+1;

    while(i < array.length) {
        if(i < j) {
            if(array[i] == array[j]) {
                sum++
                j++
            } else {
                result += [sum , array[i]].join('')
                sum = 1
                i = j
                j = i+1
            }
        }
    }
    console.log(result);
}


sumChar(array)
