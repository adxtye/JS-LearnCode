const prices = [9.99, 1.50, 34.55, 22.10, 11.5]

// let total = 0
// for (let price of prices){
//     total += price;
// }
// console.log(total);
const total = prices.reduce((total, price) => {
    return total + price;
})

const minPrice = prices.reduce((min, price) => {
    if(price < min) {
        return price;
    }
    return min;
})

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + sum, 100)
 