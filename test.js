// let word = "javaScript";
// for( let letter of word) {
//     console.log("the letter is: " + letter);
// }

// for (let i = 0; i < word.length; i++) {
//     console.log("the letter is: " + word[i]);
//     for (let j = 0; j < word.length; j++) {
//         console.log("the letter is: " + word[j]);
//     }
// }

// for(let i = 1; i < 5; i++) {

//     for(let j = 1; j < 5; j++) {
//         console.log( i +  " * " + j + " = " + i * j);
//     }
// }



// for(let i = 1; i < 5; i++) {    
//   for(let j = 1; j <= i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// for(let i = 1; i <= 5; i++) {
//     for(let j = 5; j >= i; j--) {
//         pattern += "*";
//     }   
//     pattern += "\n";
// }
// console.log(pattern);

// let pattern = "";
//  for(let i = 1; i <= 5; i++) {    
//    pattern=pattern + String.fromCharCode(64 + i);
//      console.log(pattern);
// }

// let countdown = 10;
// while (countdown > 0) {
//     console.log(countdown);
//     countdown--;
// }

// function sayHello() {
//     console.log("Hello");
// }
// sayHello();

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(addNumbers(5, 10));

// function checkAge(age) {
//     if (age < 18) {
//         console.log("You are a minor.");
//     } else {
//         console.log("You are an adult.");
//     }
// }
// checkAge(15);
// checkAge(25);


//  function calculateElectricityBill(previousReading, currentReading) {
//     if (currentReading < previousReading) {
//         console.log("Error");
//         return;
//     }   
// let consumption = currentReading - previousReading;
// let tier1 = 0;
// let tier2 = 0;
// let tier3 = 0;

//     if (consumption < 300) {
//         tier1 = consumption * 0.05;
//     }
//     else if ( consumption <= 600) {
//         tier1 = 300 * 0.05;
//         tier2 = (consumption - 300) * 0.10;
//     }
//     else {
//         tier1 = 300 * 0.05;
//         tier2 = 300 * 0.10;
//         tier3 = (consumption - 600) * 0.20;
//     }


// let meterRent = 1.5;
// let tvTax = 1.0;
// let fixedFees = meterRent + tvTax;
// let totalBill = tier1 + tier2 + tier3 + fixedFees;
// console.log("Detailed Invoice");
// console.log("Consumption: " + consumption + " kWh");
// console.log("Tier 1: " + tier1 + " JOD");
// console.log("Tier 2: " + tier2 + " JOD");
// console.log("Tier 3: " + tier3 + " JOD");
// console.log("Fixed Fees: " + fixedFees + " JOD");
// console.log("Total Bill: " + totalBill + " JOD");
// }
// calculateElectricityBill(1300, 2900);


const myArray = [1, 2, 3, 4, 5];
myArray[0] = 10;
console.log(myArray); // Output: [10, 2, 3, 4, 5]

myArray.push(6);
console.log(myArray); // Output: [10, 2, 3, 4, 5, 6]

myArray.pop();
console.log(myArray); // Output: [10, 2, 3, 4, 5]

myArray.shift();
console.log(myArray); // Output: [2, 3, 4, 5]

myArray.unshift(0);
console.log(myArray); // Output: [0, 2, 3, 4, 5]

myArray.splice(2, 1);
console.log(myArray); // Output: [0, 2, 4, 5]

myArray.splice(3, 1, 19);
console.log(myArray); // Output: [0, 2, 4, 5, 19]