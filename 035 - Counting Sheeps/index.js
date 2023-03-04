const countSheeps = (arr) => {
    let count = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i]){
            count++
        }
    }
    return count
}

console.log(countSheeps([
    true,  true,  true,  false,
    true,  true,  true,  true,
    true,  false, true,  false,
    true,  false, false, true,
    true,  true,  true,  true,
    false, false, true,  true
]))