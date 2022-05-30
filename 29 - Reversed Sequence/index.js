const reverseSequence = (number) => {
    let myArray = []
    for(let i=number; i>0; i--){
        myArray.push(i)
    }
    return myArray
}

console.log(reverseSequence(5))