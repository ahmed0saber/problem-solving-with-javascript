const generateHashtag = (str) => {
    let modifiedString = "#"
    for(let i=0; i<str.length; i++) {
        if(str[i] == " "){
            continue
        }else if(str[i-1] == " " || i == 0){
            modifiedString = modifiedString.concat(str[i].toUpperCase())
        }else{
            modifiedString = modifiedString.concat(str[i])
        }
    }
    if(modifiedString.length == 1 || modifiedString.length > 140){
        return false
    }
    return modifiedString
}

console.log(generateHashtag("Do We have A Hashtag"))