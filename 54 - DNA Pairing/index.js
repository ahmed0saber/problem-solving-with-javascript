const DNAPairing = (str) => {
    let myArray = [],
    myObject = {
        "A": ["A","T"],
        "T": ["T","A"],
        "C": ["C","G"],
        "G": ["G","C"]
    }
    for(let i=0; i<str.length; i++) {
        myArray.push(myObject[str[i]])
    }
    return myArray
}

console.log(DNAPairing("GCG"))