// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

function largestOfFour(arr) {
    const largestFourElements = []
    arr.forEach(subArr => {
        let currentLargest
        subArr.forEach(element => {
            if (element > currentLargest || currentLargest === undefined) {
                currentLargest = element
            }
        })
        largestFourElements.push(currentLargest)
    })

    return largestFourElements
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
