const truncateString = (str, length) => {
    let modifiedString = ""
    for (let i=0; i<Math.min(length, str.length); i++) {
        modifiedString = modifiedString.concat(str[i])
    }
    if(str.length > length){
        modifiedString = modifiedString.concat("...")
    }
    return modifiedString
}

console.log(truncateString("My name is Ahmed Saber", 10))
console.log(truncateString("My name is Ahmed Saber", 20))
console.log(truncateString("My name is Ahmed Saber", 30))