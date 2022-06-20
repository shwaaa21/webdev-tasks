const bmiCalculator = (height, weight) => {
    return weight / (height * height)
}

let myBmi = Math.round(bmiCalculator(1.80, 88))

if (myBmi < 18.5) {
    myBmi = `your BMI is ${myBmi}, you are 'underweight'.`;
  } else if (myBmi > 18.5 && myBmi < 24.9) {
    myBmi = `your BMI is ${myBmi}, you have a 'normal weight'.`;
  } else {
    myBmi = `your BMI is ${myBmi}, you are 'overweight'`;
  }

console.log(myBmi)