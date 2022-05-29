const romanToInteger = (number) => {
    let numberAsInteger = 0, romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for(let i=0; i<number.length; i++){
        if(
            number[i] == "I" && ["V","X"].includes(number[i+1]) || 
            number[i] == "X" && ["L","C"].includes(number[i+1]) || 
            number[i] == "C" && ["D","M"].includes(number[i+1])
        ){
            numberAsInteger += romanNumbers[number[i+1]] - romanNumbers[number[i]]
            i++
        }else{
            numberAsInteger += romanNumbers[number[i]]
        }
    }
    return numberAsInteger
}

console.log(romanToInteger("III"))
console.log(romanToInteger("LVIII"))
console.log(romanToInteger("MCMXCIV"))