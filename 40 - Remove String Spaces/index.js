const removeStringSpaces = (str) => {
    let modifiedString = ""
    for(let i=0; i<str.length; i++) {
        if(str[i] != " "){
            modifiedString = modifiedString.concat(str[i])
        }
    }
    return modifiedString
}

console.log(removeStringSpaces("asd  fg hjkl    64551  abc"))