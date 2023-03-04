const findTheMissingLetter = (givenLetters) => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let start = letters.indexOf(givenLetters[0])
    for(let i=0; i<=givenLetters.length; i++){
        if(letters[i+start] != givenLetters[i]){
            console.log(letters[i+start])
            return
        }
    }
}

findTheMissingLetter("acd")
findTheMissingLetter("ghjk")
findTheMissingLetter("wyz")