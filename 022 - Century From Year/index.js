const centuryFromYear = (year) => {
    if(year%100 == 0){
        return year/100
    }
    return Math.floor(year/100) + 1
}

console.log(centuryFromYear(1705))
console.log(centuryFromYear(1900))
console.log(centuryFromYear(1601))
console.log(centuryFromYear(2000))