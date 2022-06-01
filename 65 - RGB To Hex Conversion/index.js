/* https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript */
const convertRGBToHex = (a, b, c) => {
    if(a > 255){
        a = 255
    }else if(a < 0){
        a = 0
    }
    if(b > 255){
        b = 255
    }else if(b < 0){
        b = 0
    }
    if(c > 255){
        c = 255
    }else if(c < 0){
        c = 0
    }
    let hexEncoder = {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "A",
        "11": "B",
        "12": "C",
        "13": "D",
        "14": "E",
        "15": "F",
    },
    red = hexEncoder[(parseInt((a)/16)).toString()] + hexEncoder[((a)%16).toString()],
    green = hexEncoder[(parseInt((b)/16)).toString()] + hexEncoder[((b)%16).toString()],
    blue = hexEncoder[(parseInt((c)/16)).toString()] + hexEncoder[((c)%16).toString()]
    return red + green + blue
}

console.log(convertRGBToHex(255, 255, 255))
console.log(convertRGBToHex(255, 255, 300))
console.log(convertRGBToHex(0,0,0))
console.log(convertRGBToHex(148, 0, 211))