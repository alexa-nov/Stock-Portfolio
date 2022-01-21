
const myFunctions = require('./stock_portfolio.js');

test('Testing stock portfolio set up', () => {
    expect(myFunctions.stockPortfolioSetUp()).toStrictEqual([]);
});

test('Testing empty stock portfolio', () => {
    expect(myFunctions.isEmpty(0)).toBe("No shares owned");
});

test('Testing number of unique ticker symbols --- several the same', () => {
    expect(myFunctions.numUniqueTickers(["CAT", "CAT", "CAT", "RBLX"])).toBe(2);
});

test('Testing number of unique ticker symbols --- no tickers', () => {
    expect(myFunctions.numUniqueTickers([])).toBe(0);
});

test('Testing number of unique ticker symbols --- all unique', () => {
    expect(myFunctions.numUniqueTickers(["ABC", "CAT", "RBLX"])).toBe(3);
});

test('Testing making a purchase --- new symbol', () => {
    expect(myFunctions.makePurchase([["ABC", 1], ["CAT", 5]], "HAM", 10)).toStrictEqual([["ABC", 1], ["CAT", 5], ["HAM", 10]]);
});


test('Testing making a purchase --- existing symbol', () => {
    expect(myFunctions.makePurchase([["ABC", 1], ["CAT", 5]], "ABC", 20)).toStrictEqual([["ABC", 21], ["CAT", 5]]);
});

test('Testing making a sale --- existing symbol', () => {
    expect(myFunctions.makeSale([["ABC", 4], ["CAT", 5]], "ABC", 3)).toStrictEqual([["ABC", 1], ["CAT", 5]]);
});

test('Testing making a sale --- non-existing symbol', () => {
    expect(myFunctions.makeSale([["ABC", 4], ["CAT", 5]], "QWZ", 3)).toStrictEqual([["ABC", 4], ["CAT", 5]]);
});

test('Testing getting num of shares --- existing symbol', () => {
    expect(myFunctions.numShares([["ABC", 4], ["CAT", 5]], "ABC")).toBe(4);
});

test('Testing getting num of shares --- non-existing symbol', () => {
    expect(myFunctions.numShares([["ABC", 4], ["CAT", 5]], "NBC")).toBe();
});

test('Testing getting num of shares --- empty stock', () => {
    expect(myFunctions.updateEmptyStocks([["ABC", 0], ["CAT", 5]])).toStrictEqual([["CAT", 5]]);
});

test('Testing getting num of shares --- no empty stocks', () => {
    expect(myFunctions.updateEmptyStocks([["ABC", 4], ["CAT", 5]])).toStrictEqual([["ABC", 4], ["CAT", 5]]);
});
  
test('Testing share sale exception --- over sell', () => {
    expect(() => {myFunctions.makeSale([["ABC", 4], ["CAT", 5]], "ABC", 13)}).toThrow("ShareSaleException");
  });

test('Testing share sale exception --- over sell', () => {
    expect(() => {myFunctions.makeSale([["ABC", 4], ["CAT", 5]], "ABC", 5)}).toThrow("ShareSaleException");
  });
