const findMaxAndMinOfArray = (arr) => {
    return `max = ${Math.max(...arr)}, min = ${Math.min(...arr)}`
}

console.log(findMaxAndMinOfArray([4,6,2,1,9,63,-134,566]))
console.log(findMaxAndMinOfArray([-52, 56, 30, 29, -54, 0, -110]))
console.log(findMaxAndMinOfArray([42, 54, 65, 87, 0]))
console.log(findMaxAndMinOfArray([5]))