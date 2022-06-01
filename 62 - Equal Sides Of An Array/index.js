/* https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript */
const equalSidesOfAnArray = (arr) => {
    let sum = 0, semiSum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    for(let i=0; i<arr.length; i++){
        if(i>0){
            semiSum += arr[i-1]
        }
        if(semiSum == (sum-arr[i])/2){
            return i
        }
    }
    return -1
}

console.log(equalSidesOfAnArray([1,2,3,4,3,2,1]))
console.log(equalSidesOfAnArray([1,100,50,-51,1,1]))
console.log(equalSidesOfAnArray([1,2,3,4,5,6]))
console.log(equalSidesOfAnArray([20,10,30,10,10,15,35]))