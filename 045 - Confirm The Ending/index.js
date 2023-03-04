const confirmTheEnding = (str, end) => {
    for(let i=0; i<end.length; i++) {
        if(str[str.length - end.length + i] != end[i]){
            return false
        }
    }
    return true
}

console.log(confirmTheEnding("Ahmed", "ed"))
console.log(confirmTheEnding("Ahmed", "ad"))
console.log(confirmTheEnding("Ahmed", "med"))
console.log(confirmTheEnding("Ahmed", "d"))
console.log(confirmTheEnding("Ahmed", "e"))