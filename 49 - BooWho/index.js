const booWho = (x) => {
    if(typeof x === "boolean"){
        return true
    }
    return false
}

console.log(booWho(true))
console.log(booWho(false))
console.log(booWho("true"))
console.log(booWho(1))
console.log(booWho(50))