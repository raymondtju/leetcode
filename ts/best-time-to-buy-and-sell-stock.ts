function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let x = 0; x < prices.length; x++) {
    minPrice = Math.min(minPrice, prices[x]);
    maxProfit = Math.max(maxProfit, prices[x] - minPrice);
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([4, 7, 1, 2]));
