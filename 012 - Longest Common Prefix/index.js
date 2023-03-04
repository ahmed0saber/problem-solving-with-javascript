const getLongestCommonPrefix = (words) => {
    let commonPrefix = "", wordsOnCommon = 0
    if(words.length == 1 || words[0].length == 0){
        return words[0]
    }
    for(let i=0; i<words[0].length; i++){
        for(let j=0; j<words.length; j++){
            if(words[j][i] != words[0][i]){
                return commonPrefix
            }else if(wordsOnCommon == words.length - 1){
                commonPrefix = commonPrefix.concat(words[j][i])
            }else{
                wordsOnCommon++
            }
        }
        wordsOnCommon = 0
    }
    return commonPrefix
}

console.log(getLongestCommonPrefix(["flower","flow","flight"]))
console.log(getLongestCommonPrefix(["dog","racecar","car"]))
console.log(getLongestCommonPrefix(["prefix","prepare","prebuy","press","pretend"]))
console.log(getLongestCommonPrefix([""]))
console.log(getLongestCommonPrefix(["Ahmed"]))
console.log(getLongestCommonPrefix(["map","map","map","map"]))