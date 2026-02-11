const maxProfit = (prices) => {
  if (!prices || prices.length < 2) {
    return 0;
  }

  let min = prices[0];
  let maxProfit = 0;
  for (const price of prices) {
    if (price - min > maxProfit) {
      maxProfit = price - min;
    }
    if (price < min) {
      min = price;
    }
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
