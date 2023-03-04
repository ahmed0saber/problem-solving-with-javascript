// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

function findLongestWordLength(str) {
    const wordsArray = str.split(" ")
    let longestWord = ""
    wordsArray.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    })

    return longestWord.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
