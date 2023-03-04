const basicMathematicalOperations = (op, num1, num2) => {
    if(op == "+"){
        return num1 + num2
    }else if(op == "-"){
        return num1 - num2
    }else if(op == "*"){
        return num1 * num2
    }else if(op == "/"){
        return num1 / num2
    }else{
        return "Operator is not valid"
    }
}

console.log(basicMathematicalOperations('+', 4, 7))