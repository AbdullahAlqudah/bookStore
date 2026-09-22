// ==================================================
// Bookstore & Reading Club - JavaScript Exercises
// ==================================================


// ==================================================
// Q1: Evaluate JavaScript Expressions
// ==================================================

// Part 1
console.log(-9 * 3);                         // -27
console.log("value is" + 50);               // "value is50"
console.log(17 % 5);                        // 2
console.log(5 % 17);                        // 5
console.log(5 / 10);                        // 0.5
console.log(4 == 4);                        // true
console.log(4 != 5);                        // true
console.log(7 <= 8);                        // true

// Math.ceil() rounds up and Math.floor() rounds down
let x = 4.5;
console.log(Math.ceil(x) - Math.floor(x));   // 1


// Part 2
console.log(typeof 100);                    // "number"
console.log(typeof 73.9);                   // "number"
console.log(typeof NaN);                    // "number"
console.log(typeof "Water");                // "string"
console.log(typeof false);                  // "boolean"
console.log(typeof (9 != 11));              // "boolean"

console.log("Orang" + "e");                 // "Orange"
console.log("Orange" - "s");                // NaN

console.log("4" + "8");                     // "48"
console.log("4" - "8");                     // -4

console.log("name" + 3);                    // "name3"
console.log("name" - 3);                    // NaN

console.log(82 * "word");                   // NaN

console.log(1 + "hello");                   // "1hello"
console.log("hello" + 1);                   // "hello1"

console.log(1 + true);                      // 2
console.log("hello" + true);                // "hellotrue"

console.log(typeof Infinity);               // "number"

console.log(1 == "1");                      // true
console.log(1 === "1");                     // false



// ==================================================
// Q2: Read a number and display it using alert
// ==================================================

let q2Number = Number(prompt("Q2: Enter a number:"));

alert("The number is: " + q2Number);



// ==================================================
// Q3: Read two numbers and display them
// in ascending order
// ==================================================

let q3Num1 = Number(prompt("Q3: Enter the first number:"));
let q3Num2 = Number(prompt("Q3: Enter the second number:"));

if (q3Num1 < q3Num2) {
    alert(q3Num1 + ", " + q3Num2);
}
else if (q3Num2 < q3Num1) {
    alert(q3Num2 + ", " + q3Num1);
}
else {
    alert("The numbers are equal: " + q3Num1);
}



// ==================================================
// Q4: Read two numbers and display the larger number
// ==================================================

let q4Num1 = Number(prompt("Q4: Enter the first number:"));
let q4Num2 = Number(prompt("Q4: Enter the second number:"));

if (q4Num1 > q4Num2) {
    alert("The larger number is: " + q4Num1);
}
else if (q4Num2 > q4Num1) {
    alert("The larger number is: " + q4Num2);
}
else {
    alert("The two numbers are equal.");
}



// ==================================================
// Q5: Read two numbers and display their sum
// ==================================================

// prompt() returns a string by default.
// Number() converts the input from string to number.

let q5Num1 = Number(prompt("Q5: Enter the first number:"));
let q5Num2 = Number(prompt("Q5: Enter the second number:"));

let sum = q5Num1 + q5Num2;

alert("The sum is: " + sum);

/*
Problem:

Without Number():

"5" + "10" = "510"

Because prompt() returns strings.

With Number():

5 + 10 = 15
*/



// ==================================================
// Q6: Convert a number from 1-9 to a word
// ==================================================

let num = Number(prompt("Q6: Enter a number from 1 to 9:"));

if (num === 1) {
    console.log("ONE");
}
else if (num === 2) {
    console.log("TWO");
}
else if (num === 3) {
    console.log("THREE");
}
else if (num === 4) {
    console.log("FOUR");
}
else if (num === 5) {
    console.log("FIVE");
}
else if (num === 6) {
    console.log("SIX");
}
else if (num === 7) {
    console.log("SEVEN");
}
else if (num === 8) {
    console.log("EIGHT");
}
else if (num === 9) {
    console.log("NINE");
}
else {
    console.log("PLEASE TRY AGAIN");
}



// ==================================================
// Q7: Applicant eligibility based on age
// ==================================================

// Ask the user for their birth year
let birthYear = Number(prompt("Q7: Enter your birth year:"));

// Get the current year automatically
let currentYear = new Date().getFullYear();

// Calculate the age
let age = currentYear - birthYear;

console.log("Your age is: " + age);


// Check the age conditions

if (age > 60) {

    alert("You may join the seniors' program.");

}
else if (age > 30) {

    alert("You are not eligible. You may join other programs.");

}
else if (age >= 18) {

    alert("You are eligible. Start your application.");

}
else {

    alert("You may join the kids' program.");

}



// ==================================================
// Q8: Convert lowercase letters to uppercase
// and uppercase letters to lowercase
// ==================================================

function swapCase(text) {

    let result = "";

    // Loop through every character
    for (let i = 0; i < text.length; i++) {

        // Check if the character is uppercase
        if (text[i] === text[i].toUpperCase()) {

            // Convert it to lowercase
            result += text[i].toLowerCase();

        }
        else {

            // Convert lowercase to uppercase
            result += text[i].toUpperCase();

        }
    }

    return result;
}


// Example
console.log(swapCase("OrAnGe"));

// Output:
// oRaNgE



// ==================================================
// Q9: Convert text to CamelCase
// ==================================================

function toCamelCase(text) {

    // Split the text into words
    let words = text.split(" ");

    let result = "";

    // Loop through the words
    for (let i = 0; i < words.length; i++) {

        // Keep the first word as it is
        if (i === 0) {

            result += words[i];

        }
        else {

            // Capitalize the first letter
            // and add the rest of the word

            result +=
                words[i][0].toUpperCase() +
                words[i].slice(1);
        }
    }

    return result;
}


// Example
console.log(
    toCamelCase("Coding Academy by Orange")
);

// Output:
// CodingAcademyByOrange