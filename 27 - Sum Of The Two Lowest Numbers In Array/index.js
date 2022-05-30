const sumOfTheTwoLowestNumbersInArray = (myArray) => {
    let num1 = Math.min(...myArray)
    myArray.splice(myArray.indexOf(num1), 1)
    let num2 = Math.min(...myArray)
    return num1 + num2
}

console.log(sumOfTheTwoLowestNumbersInArray([2,8,1,9]))