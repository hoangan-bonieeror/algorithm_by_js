function printsao(n) {
    for(let i=1; i<=n; i++) {
        var arr = [];
        for(let j=1; j<=i; j++) {
            arr.push('*')
        }
        console.log(arr.join(''))
    }
}

printsao(6)
