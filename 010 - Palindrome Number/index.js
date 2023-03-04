const isPalindromeNumber = (number) => {
    let numberAsString = number.toString()
    for(let i=0; i<numberAsString.length/2; i++){
        if(numberAsString[i] != numberAsString[numberAsString.length-i-1]){
            return false
        }
    }
    return true
}

console.log(isPalindromeNumber(123))
console.log(isPalindromeNumber(1234))
console.log(isPalindromeNumber(121))
console.log(isPalindromeNumber(1221))