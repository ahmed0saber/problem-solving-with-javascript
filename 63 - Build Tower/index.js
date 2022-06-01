/* https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript */
const buildTower = (n) => {
    let myTower = [], myString
    for(let i=0; i<n; i++) {
        myString = ""
        for(let j=0; j<2*n-1; j++){
            if(j >= n-i-1 && j <= n+i-1){
                myString += "*"
            }else{
                myString += " "
            }
        }
        myTower.push(myString)
    }
    return myTower
}

console.log(buildTower(3))