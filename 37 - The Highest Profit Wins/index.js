const theHighestProfitWins = (arr) => {
    return [Math.min(...arr), Math.max(...arr)]
}

console.log(theHighestProfitWins([1,2,3,4,5]))