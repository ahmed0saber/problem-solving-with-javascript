const isValidParentheses = (givenString) => {
    let parentheses = {
        "(": false,
        "{": false,
        "[": false,
        ")": "(",
        "}": "{",
        "]": "[",
    }, myStack = []
    for(let i=0; i<givenString.length; i++) {
        if(!parentheses[givenString[i]]){
            myStack.push(givenString[i])
        }else{
            if(myStack[myStack.length-1] == parentheses[givenString[i]]){
                myStack.pop()
            }else{
                return false
            }
        }
    }
    if(myStack.length > 0){
        return false
    }
    return true
}

console.log(isValidParentheses("()"))
console.log(isValidParentheses("()[]{}"))
console.log(isValidParentheses("[[]"))
console.log(isValidParentheses("][()"))
console.log(isValidParentheses("[()]"))
console.log(isValidParentheses("[)]"))
console.log(isValidParentheses("[])"))