
function stockPortfolioSetUp(){
  portfolio = []
  return portfolio;
}

function isEmpty(shares){ 
  if (shares === 0){
    return "No shares owned"
  }
}

function numUniqueTickers(tickers){
  found = []
  num = 0;
  portfolio = updateEmptyStocks(portfolio);
  for (let i = 0; i < tickers.length; i++){
    if (!found.includes(tickers[i])){
      found.push(tickers[i]);
      num++;
    }
  }
  return num;
}

function makePurchase(portfolio, symbol, numOfShares){
  portfolio = updateEmptyStocks(portfolio);
  found = []
  for (let i = 0; i < portfolio.length; i++){
    if (!found.includes(portfolio[i][0])){
      found.push(portfolio[i][0]);
    }
  }
  if (!found.includes(symbol)){
    portfolio.push([symbol, numOfShares]);
  }
  for (let i = 0; i < portfolio.length; i++){
    if (portfolio[i][0] === symbol && found.includes(symbol)){
      portfolio[i][1] += numOfShares;
    }
  }
  return portfolio;
}

function makeSale(portfolio, symbol, numOfShares){
  portfolio = updateEmptyStocks(portfolio);
  for (let i = 0; i < portfolio.length; i++){
    if (portfolio[i][0] === symbol){
      if (portfolio[i][1] < numOfShares){
        throw "ShareSaleException";
      }
      else{
        portfolio[i][1] -= numOfShares;
      }
    }
  }
  return portfolio;
}

/*
function ShareSaleException(message = ""){
  this.name = 'ShareSaleException';
  this.message = message;
}*/

function numShares(portfolio, symbol){
  portfolio = updateEmptyStocks(portfolio);
  for (let i = 0; i < portfolio.length; i++){
    if (portfolio[i][0] === symbol){
      return portfolio[i][1];
    }
  }
}

function updateEmptyStocks(portfolio){
  for (let i = 0; i < portfolio.length; i++){
    if (portfolio[i][1] <= 0) {
      portfolio.splice(i, 1);
    }
  }
  return portfolio;
}


exports.stockPortfolioSetUp = stockPortfolioSetUp;
exports.isEmpty = isEmpty;
exports.numUniqueTickers = numUniqueTickers;
exports.makePurchase = makePurchase;
exports.makeSale = makeSale;
exports.numShares = numShares;
exports.updateEmptyStocks = updateEmptyStocks;

