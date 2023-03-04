const calculateAverage = (numbers) => {
    let sum = 0
    for(let i=0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    if(numbers.length>0){
        return sum / numbers.length
    }
    return 0
}

console.log(calculateAverage([2,5,9,8]))
console.log(calculateAverage([]))