const squareSum = (numbers) => {
    let sum = 0
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i] * numbers[i]
    }
    return sum
}

console.log(squareSum([1,2,2]))