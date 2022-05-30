const numberOfPeopleInTheBus = (arr) => {
    let numberOfPeople = 0
    for(let i=0; i<arr.length; i++) {
        numberOfPeople += arr[i][0] - arr[i][1]
    }
    return numberOfPeople
}

console.log(numberOfPeopleInTheBus([[10,0],[3,5],[5,8]]))