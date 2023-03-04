const findIntersection = (strArr) => {
    let intersection = ""
    let list1 = strArr[0].split(", ")
    let list2 = strArr[1].split(", ")
    for(let i=0; i<list1.length; i++) {
        if(list2.includes(list1[i])){
            if(i != 0){
                intersection = intersection.concat(",")
            }
            intersection = intersection.concat(list1[i])
        }
    }
    return intersection
}

console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))