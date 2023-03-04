const sumOfPossitiveNumbersInArray = (numbers) => {
    let sum = 0
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] > 0){
            sum += numbers[i]
        }
    }
    return sum
}

console.log(sumOfPossitiveNumbersInArray([1, 2, 42, 38, -80, -74, 55]))