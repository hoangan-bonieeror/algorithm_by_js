const encrypt = (text, rot = 3 , alphabet = 'abcdefghijklmnopqrstuvwxyz') => {
    alphabet = Array.from(alphabet)
    const MAX_ROT = alphabet.length

    text = Array.from(text)

    const encryptedText = text.map((char) => {
        const isUpper = char.toUpperCase()
        const idx = alphabet.indexOf(char.toLowerCase())

        if (idx === -1) {
            return char
        }

        const encryptedIdx = (idx + rot) % MAX_ROT
        const encryptedChar = alphabet[encryptedIdx]

        return isUpper === char ? encryptedChar.toUpperCase() : encryptedChar
    })

    return encryptedText.join('')
}

const decrypt = (cipherText, alphabet = 'abcdefghijklmnopqrstuvwxyz', digrams = ['ng','nh','ch', 'th', 'tr', 'kh']) => {

    alphabet = Array.from(alphabet)
    const MAX_ROT = alphabet.length
    let i = 0;
    let resultArr = []
    while (i < MAX_ROT) {

        cipherText = Array.from(cipherText)
        const decryptedText = cipherText.map((char) => {
            const isUpper = char.toUpperCase()
            const idx = alphabet.indexOf(char.toLowerCase())

            if (idx === -1) {
                return char
            }

            let shift = (idx - i) % MAX_ROT

            shift = shift < 0 ? shift + MAX_ROT : shift

            const decryptedChar = alphabet[shift]
            

            return isUpper === char ? decryptedChar.toUpperCase() : decryptedChar
        })

        resultArr.push(decryptedText.join(''))
        i++
    }
    let [max , indexMax] = [0,0]
    resultArr.forEach((cipherText,index) => {
        let arrCipher = cipherText.split(' ')
        let rate = 0
        for(let i=0; i<arrCipher.length;i++) {
            let digramsInLetter = arrCipher[i].slice(0,2)
            if(arrCipher[i].length > 2 && digrams.includes(digramsInLetter.toLowerCase())) {
                rate++
            }
        }
        if(rate > max) {
            max = rate
            indexMax = index
        }
    })
    return resultArr[indexMax]
}



console.time('Decryption Ceasar');
var result = decrypt('Xqkj hwi yde ai ke hw twjd nke yqjc ldwe iwq. Jck zquaj iejd xaj hwq we jck hwe tw ywyd jdwq.');
console.timeEnd('Decryption Ceasar');
console.log("Plain text : ", result)

// console.time('Encryption Ceasar');
// var result = encrypt('Buon lam chi em oi la xanh roi cung phai mau. Ngo duyen minh ben lau ai ngo lai xa cach nhau.', 22);
// console.timeEnd('Encryption Ceasar');
// console.log("Cipher text :", result)