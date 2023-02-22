const array = ['A', 'A', 'A', 'B', 'B', 'C', 'D']

function sumChar(array) {
    let result = '';
    let sum = 0;
    
    array.sort()

    let i = 0;
    let j = i+1;

    while(i < array.length) {
        if(i < j) {
            if(array[i] == array[j]) {
                sum++
                j++
            }
        } else {
            result += [sum , array[i]].join('')
            i = 0
            j = 1
        }
    }

    console.log(result);
}


