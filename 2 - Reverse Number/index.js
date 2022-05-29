const reverseNumber = (num) => {
    let stringfiedNumber = num.toString()
    let reversedNumber = ""
    for(let i=0; i<stringfiedNumber.length; i++){
        reversedNumber = stringfiedNumber[i].concat(reversedNumber)
    }
    return parseInt(reversedNumber)
}

console.log(reverseNumber(123456))