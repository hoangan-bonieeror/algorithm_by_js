function tamgiaccan(h) {
    var width = h*2 - 1;
    var expand = 0;
    var center = h-1;
    for(let i=0; i<=h-1 ; i++) {
        var arr = [];
        for(let j=0; j<=width-1 ; j++){
           if(j<center-expand || j>center+expand) {
                arr.push(' ')
            } else {
                arr.push('*');
            }     
        }
        console.log(arr.join(' '))
        expand ++    
    }
}
console.time('Triangle'); 
tamgiaccan(6);
console.timeEnd('Triangle');
