/* Delete occurrences of an element if it occurs more than n times */
/* https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript */
const deleteNthOccurrences = (arr, n) => {
    let myObject = {}, myArray = []
    for(let i=0; i<arr.length; i++) {
        if(myObject[arr[i]] >= n){
            continue
        }else{
            if(isNaN(myObject[arr[i]])){
                myObject[arr[i]] = 1
            }else{
                myObject[arr[i]] += 1
            }
            myArray.push(arr[i])
        }
    }
    return myArray
}

console.log(deleteNthOccurrences([20,37,20,21], 1))
console.log(deleteNthOccurrences([1,1,3,3,7,2,2,2,2], 3))