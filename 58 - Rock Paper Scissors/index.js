const rockPaperScissors = (player1, player2) => {
    let loseAgainst = {
        "scissors": "rock",
        "paper": "scissors",
        "rock": "paper"
    }
    if(player1 == loseAgainst[player2]){
        return "Player 1 won!"
    }else if(player2 == loseAgainst[player1]){
        return "Player 2 won!"
    }
    return "Draw!"
}

console.log(rockPaperScissors('scissors','paper'))
console.log(rockPaperScissors('scissors','rock'))
console.log(rockPaperScissors('paper','paper'))