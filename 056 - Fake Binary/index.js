const fakeBinary = (str) => {
    let modifiedString = ""
    for(let i=0; i<str.length; i++) {
        if(str[i] < 5){
            modifiedString = modifiedString.concat("0")
        }else{
            modifiedString = modifiedString.concat("1")
        }
    }
    return modifiedString
}

console.log(fakeBinary("45385593107843568"))