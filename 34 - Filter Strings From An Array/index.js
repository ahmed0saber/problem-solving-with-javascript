const filterStringsFromAnArray = (arr) => {
    let modifiedArray = []
    for(let i=0; i<arr.length; i++) {
        if(typeof arr[i] === 'number') {
            modifiedArray.push(arr[i])
        }
    }
    return modifiedArray
}

console.log(filterStringsFromAnArray([1,2,'a','b']))
console.log(filterStringsFromAnArray([1,'a','b',0,15]))
console.log(filterStringsFromAnArray([1,2,'aasf','1','123',123]))