const countTheSmileyFaces = (arr) => {
    let validEyes = {
        ":": true,
        ";": true
    }, validNose = {
        "-": true,
        "~": true
    }, validMouth = {
        ")": true,
        "D": true
    }, count = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i].length == 2 && validEyes[arr[i][0]] && validMouth[arr[i][1]]){
            count++
        }else if(arr[i].length == 3 && validEyes[arr[i][0]] && validNose[arr[i][1]] && validMouth[arr[i][2]]){
            count++
        }
    }
    return count
}

console.log(countTheSmileyFaces([]))
console.log(countTheSmileyFaces([':D',':~)',';~D',':)']))
console.log(countTheSmileyFaces([':)',':(',':D',':O',':;']))
console.log(countTheSmileyFaces([';]', ':[', ';*', ':$', ';-D']))