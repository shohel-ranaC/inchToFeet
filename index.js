// const inch = 300;
// const feet = inch/12;
// console.log(feet);

// function inchToFeet(inch){
//     return inch/12;
// }
// const inch = inchToFeet(500);
// console.log(inch);

function inchToFeet(inch){
    const feet = inch/12;
//   const feetNumber = parseInt(feet);
    return feet;
}
const inch = inchToFeet(500);
const inch1 = inchToFeet(900);
//const inchNumber = inch.toFixed(2);
//const inchNumber = Math.round(inch);
const inchNumber = Math.floor(inch);
console.log(inchNumber);
console.log(inch1);
