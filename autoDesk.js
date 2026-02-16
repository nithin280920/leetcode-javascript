const transactions = [
  { id: 1, category: "food", amount: 20 },
  { id: 2, category: "travel", amount: 100 },
  { id: 3, category: "food", amount: 15 },
  { id: 4, category: "shopping", amount: 50 },
  { id: 5, category: "travel", amount: 40 },
];

// output = {
//     "food": 35,
//     "travel": 140,
//     "shopping": 50
// }

const result = transactions.reduce((acc, trans) => {
  const { amount, category } = trans;
  if (!acc[category]) {
    acc[category] = 0;
  }
  acc[category] += amount;
  return acc;
}, {});

console.log(result);
