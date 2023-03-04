const returnNegative = (number) => {
    if(number <= 0){
        return number
    }
    return number * -1
}

console.log(returnNegative(1))
console.log(returnNegative(0))
console.log(returnNegative(-5))