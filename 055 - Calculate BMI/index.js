const calculateBMI = (weight, height) => {
    let bmi = weight / (height * height)
    if(bmi <= 18.5){
        return "Underweight"
    }else if(bmi <= 25){
        return "Normal"
    }else if(bmi <= 30){
        return "Overweight"
    }else{
        return "Obese"
    }
}

console.log(calculateBMI(80, 1.80))