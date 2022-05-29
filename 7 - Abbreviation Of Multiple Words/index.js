const abbreviationOfMultipleWords = (givenString) => {
    let modifiedString = "", firstLetter = true
    for(let i=0; i<givenString.length; i++) {
        if(givenString[i] == " "){
            modifiedString = modifiedString.concat(".")
            firstLetter = true
        }else if(firstLetter){
            modifiedString = modifiedString.concat(givenString[i])
            firstLetter = false
        }
    }
    modifiedString = modifiedString.toUpperCase()
    return modifiedString
}

console.log(abbreviationOfMultipleWords("Ahmed Saber Fathy Hassan"))
console.log(abbreviationOfMultipleWords("responsive web design"))
console.log(abbreviationOfMultipleWords("Single page Application"))