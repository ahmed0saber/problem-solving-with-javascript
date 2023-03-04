const findNeedle = (myArray) => {
    return `found the needle at position ${myArray.indexOf("needle")}`
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))