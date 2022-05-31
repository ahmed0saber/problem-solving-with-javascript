const repeatString = (str, frequency) => {
    let repeatedString = ""
    for(let i=0; i<frequency; i++) {
        repeatedString = repeatedString.concat(str)
    }
    return repeatedString
}

console.log(repeatString("Hi", 1))
console.log(repeatString("abc", 3))
