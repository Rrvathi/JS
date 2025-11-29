//  a=16
//         if(a>=18){
//             console.log("yes you are eligible for vote")
//         }
//         else{
//             console.log("sorry you are not eligible for vote")
//         }
// b=100
// if(b>=100){
//     console.log('Grade','A')
// }if(b<80){
//     console.log('Grade','B')
// }if(b<60){
//     console.log('Grade','C')
// }if(b<50){
//     console.log('Grade','D')
// }else{
//     console.log('Fail')
// }

// var hour=24
// if(hour<12){
//     console.log("Good Morning")
// }if(hour>13){
//     console.log("Good Afternoon")
// }if(hour<18){
//     console.log("Good Evening")
// }
// else{
//     console.log("Good Night")
// }


// BMI category
// Write bmiCategory(weightKg, heightM) that computes BMI = weightKg / (heightM * heightM), then categorises:

// BMI < 18.5 → “Underweight”

// BMI < 25 → “Normal”

// BMI < 30 → “Overweight”

// otherwise → “Obese”

// var weight=52
// var height=5.4
// BMI = weight / (height * height)
// if(BMI<18.5){
//     console.log("underweight")
// }if(BMI<25){
//     console.log("Normal")
// }if(BMI>30){
//     console.log("Overweight")
// }else{
//     console.log("obese")
// }


// Discount calculation
// Given a purchaseAmount, write getDiscount(amount) that returns the discount percentage:

// if amount ≥ 100 → 20%

// else if amount ≥ 50 → 10%

// otherwise → 0%

var discount=100
if(discount>100){
    console.log("you will get 20%")
}else if(discount>=50){
    console.log("you will get 10%")
}else{
    console.log("you are unable to get discount")
}