const findTheNextPerfectSquare = (number) => {
    if(Math.sqrt(number)%1 ==0){
        let nextNumber = Math.floor(Math.sqrt(number)) + 1
        return nextNumber * nextNumber
    }
    return -1
}

console.log(findTheNextPerfectSquare(121))
console.log(findTheNextPerfectSquare(625))
console.log(findTheNextPerfectSquare(114))