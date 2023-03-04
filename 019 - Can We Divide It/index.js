const canWeDivideIt = (number, a, b) => {
    if(number%a == 0 && number%b == 0){
        return true
    }
    return false
}

console.log(canWeDivideIt(-12, 2, -6))