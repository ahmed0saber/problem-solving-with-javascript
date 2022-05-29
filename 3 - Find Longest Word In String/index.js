const findLongestWordInString = (givenString) => {
    let longestWord = "", tempWord = ""
    for(let i=0; i<givenString.length; i++) {
        if(
            givenString[i] == " " || 
            givenString[i] == "'" || 
            givenString[i] == "," || 
            givenString[i] == "." || 
            givenString[i] == "\"" || 
            i == givenString.length - 1
        ){
            if(tempWord.length > longestWord.length){
                longestWord = tempWord
            }
            tempWord = ""
        }else{
            tempWord = tempWord.concat(givenString[i])
        }
    }
    return longestWord
}

console.log(findLongestWordInString("My name is Ahmed Saber, I'm a Frontend Web Developer."))