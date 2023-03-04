// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

function factorialize(num) {
    let total = 1
    for (let i = num; i > 1; i--) {
        total *= i
    }

    return total
}

console.log(factorialize(5))
