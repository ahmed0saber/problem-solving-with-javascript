const addCommasAndUnderscoresToNumber = (number) => {
    let numberAsString = number.toString()
    let modifiedNumberAsString = ""
    for(let i=0; i<numberAsString.length; i++){
        if(i == 3){
            modifiedNumberAsString = modifiedNumberAsString.concat("_")
        }else if(i % 3 == 0 && i != 0){
            modifiedNumberAsString = modifiedNumberAsString.concat(",")
        }
        modifiedNumberAsString = modifiedNumberAsString.concat(numberAsString[i])
    }
    return modifiedNumberAsString
}

console.log(addCommasAndUnderscoresToNumber(123))
console.log(addCommasAndUnderscoresToNumber(123456))
console.log(addCommasAndUnderscoresToNumber(123456789))
console.log(addCommasAndUnderscoresToNumber(123456789123456789))