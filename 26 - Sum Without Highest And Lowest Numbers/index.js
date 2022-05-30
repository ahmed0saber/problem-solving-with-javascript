const sumWithoutHighestAndLowestNumbers = (myArray) => {
    if(myArray == null){
        return 0
    }
    let sum = 0, noMinYet = true, noMaxYet = true
    for(let i=0; i<myArray.length; i++) {
        if(myArray[i] == Math.max(...myArray) && noMinYet){
            noMinYet = false
        }else if(myArray[i] == Math.min(...myArray) && noMaxYet){
            noMaxYet = false
        }else{
            sum += myArray[i]
        }
    }
    return sum
}

console.log(sumWithoutHighestAndLowestNumbers([1,2,3,4,5]))