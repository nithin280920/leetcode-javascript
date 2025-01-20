
const maxProfit = (prices) => {
    if (!prices || prices.length < 2) {
        return 0;
    }

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        
        if (price < minPrice) {
            minPrice = price;
        }
        
        const currentProfit = price - minPrice;
        
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }

    return maxProfit;
    
};

const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));
