const sumOfOddNumbersOnSameRowOfTriangle = (n) => {
    let result = 0
    for(let i=((n*(n-1))+1); i<=((n*(n+1))-1); i+=2) {
        result += i
    }
    return result
}

console.log(sumOfOddNumbersOnSameRowOfTriangle(1))
console.log(sumOfOddNumbersOnSameRowOfTriangle(2))
console.log(sumOfOddNumbersOnSameRowOfTriangle(3))
console.log(sumOfOddNumbersOnSameRowOfTriangle(4))
console.log(sumOfOddNumbersOnSameRowOfTriangle(5))