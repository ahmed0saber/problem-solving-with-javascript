// const containsDuplicate = (numbers) => {
//     let currentNumber
//     for(let i=numbers.length-1; i>=0; i--){
//         currentNumber = numbers[i]
//         numbers.pop()
//         if(numbers.includes(currentNumber)){
//             return true
//         }
//     }
//     return false
// }

// const containsDuplicate = (numbers) => {
//     for(let i=0; i<numbers.length; i++) {
//         for(let j=i+1; j<numbers.length; j++){
//             if(numbers[i] == numbers[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }

const containsDuplicate = (numbers) => {
    myNumbers = {}
    for(let i=0; i<numbers.length; i++) {
        if(myNumbers[numbers[i]]){
            return true
        }else{
            myNumbers[numbers[i]] = true
        }
    }
    return false
}

console.log(containsDuplicate([1,2,2,3]))
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))