// const removeDuplicatesFromSortedArray = (arr) => {
//     let modifiedArray = [], myObject = {}
//     for(let i=0; i<arr.length; i++) {
//         if(!myObject[arr[i]]){
//             modifiedArray.push(arr[i])
//             myObject[arr[i]] = true
//         }else{
//             modifiedArray.push("_")
//         }
//     }
//     return modifiedArray.sort()
// }

const removeDuplicatesFromSortedArray = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (i < arr.length - 1 && arr[i] == arr[i + 1]){
            continue
        }
        arr[count] = arr[i]
        count++
    }
    return count
}

console.log(removeDuplicatesFromSortedArray([1,1,2]))
console.log(removeDuplicatesFromSortedArray([0,0,1,1,1,2,2,3,3,4]))
