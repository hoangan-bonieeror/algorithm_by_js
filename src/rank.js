const ranked = require('ranked')
let products = [
    { name: 'A Tee', price: 23 },
    { name: 'B Tee', price: 11 },
    { name: 'C Tee', price: 29 },
    { name: 'D Tee', price: 50 },
    { name: 'E Tee', price: 9 }
]


products[0]['review'] = [4, 6, 43, 31, 25]
products[1]['review'] = [22, 54, 31, 1, 0]
products[2]['review'] = [4, 63, 31, 1, 52]
products[3]['review'] = [4, 16, 3, 21, 45]
products[4]['review'] = [4, 6, 3, 1, 5]


const calAverageRate = (reviews) => {
    let totalWeight = 0
    let totalReviews = 0
    for(let i = 4; i>=0; i--) {
        let eachItem = reviews[i]*(i+1)
        totalWeight += eachItem
        totalReviews += reviews[i]
    }
    let average = totalWeight / totalReviews
    return parseFloat(average.toFixed(2))
}

const rating = (products) => {
    products.forEach(async product => {
        product['rate'] = calAverageRate(product['review'])
        product['review']
    })
    
    
    // console.log( 'Calculate rating : ')
    // console.table(products)
    
    const scoreFn = product => product.rate
    
    var rankedItems = ranked.ranking(products, scoreFn)
    
    // console.log( 'Ranking : ', rankedItems)
    return { rankedItems }
}


let result = rating(products)

console.table(result)