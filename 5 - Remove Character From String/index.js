const removeCharacterFromString = (givenString, character) => {
    let modifiedString = ""
    for(let i=0; i<givenString.length; i++) {
        if(givenString[i] != character){
            modifiedString = modifiedString.concat(givenString[i])
        }
    }
    return modifiedString
}

console.log(removeCharacterFromString("My name is Ahmed Saber.", "m"))