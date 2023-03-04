const sumAllNumbersInRange = (arr) => {
    return ((arr[0] + arr[1])/2) * (Math.max(arr[1], arr[0]) - Math.min(arr[1], arr[0]) + 1)
}

console.log(sumAllNumbersInRange([1, 4]))
console.log(sumAllNumbersInRange([4, 1]))