const titleCaseSentence = (str) => {
    let modifiedString = ""
    modifiedString = modifiedString.concat(str[0].toUpperCase())
    for(let i=1; i<str.length; i++) {
        if(str[i-1] == " "){
            modifiedString = modifiedString.concat(str[i].toUpperCase())
        }else{
            modifiedString = modifiedString.concat(str[i].toLowerCase())
        }
    }
    return modifiedString
}

console.log(titleCaseSentence("my name is Ahmed"))
console.log(titleCaseSentence("MY NAME IS AHMED"))