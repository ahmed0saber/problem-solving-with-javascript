const removeDuplicateWordsInString = (givenString) => {
    let tempWord = "", words = [], modifiedString = ""
    for(let i=0; i<givenString.length; i++) {
        if(
            givenString[i] == " " || 
            givenString[i] == "'" || 
            givenString[i] == "," || 
            givenString[i] == "." || 
            givenString[i] == "\"" || 
            i == givenString.length - 1
        ){
            if(!words.includes(tempWord)){
                words.push(tempWord)
                modifiedString = modifiedString.concat(tempWord)
            }
            tempWord = ""
            modifiedString = modifiedString.concat(givenString[i])
        }else{
            tempWord = tempWord.concat(givenString[i])
        }
    }
    return modifiedString
}

console.log(removeDuplicateWordsInString("Hello Hello My name is My Ahmed Hello Saber."))