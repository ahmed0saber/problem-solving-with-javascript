const convertHTMLEntities = (str) => {
    let modifiedString = "", 
    myObject = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "\'": "&apos;",
    }
    for(let i=0; i<str.length; i++) {
        if(str[i] == "&" || str[i] == "<" || str[i] == ">" || str[i] == "\"" || str[i] == "\'"){
            modifiedString = modifiedString.concat(myObject[str[i]])
        }else{
            modifiedString = modifiedString.concat(str[i])
        }
    }
    return modifiedString
}

console.log(convertHTMLEntities("I'm Ahmed Saber > \"Full Stack Web Developer\" < Frontend & Backend"))