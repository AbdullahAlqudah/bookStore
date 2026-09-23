// ========================================
// Q7
// Display numbers 0 to 5
// Each number in a separate alert
// ========================================

for (let i = 0; i <= 5; i++) {
    alert(i);
}



// ========================================
// Q8
// Display numbers 0 to 5
// In a single alert
// ========================================

let numbers = "";

for (let i = 0; i <= 5; i++) {
    numbers += i + " ";
}

alert(numbers);



// ========================================
// Q9
// Display multiples of 3
// From 0 to 20
// ========================================

for (let i = 0; i <= 20; i++) {

    if (i % 3 === 0) {
        console.log(i);
    }

}



// ========================================
// Q10
// Ask for a number between 0 and 100
// Keep asking if the number is out of range
// ========================================

let number = Number(
    prompt("Enter a number between 0 and 100:")
);

while (number < 0 || number > 100) {

    alert("Error! Number must be between 0 and 100.");

    number = Number(
        prompt("Enter a number between 0 and 100:")
    );

}

console.log("Valid number: " + number);



// ========================================
// Q11
// Same as Q10
// Also check if the input is not a number
// ========================================

let userNumber = Number(
    prompt("Enter a number between 0 and 100:")
);

while (
    isNaN(userNumber) ||
    userNumber < 0 ||
    userNumber > 100
) {

    alert("Invalid input!");

    userNumber = Number(
        prompt("Please enter a valid number between 0 and 100:")
    );

}

console.log("Valid number: " + userNumber);



// ========================================
// Q12
// Calculate the sum from 0
// To the number entered by the user
// ========================================

let sumNumber = Number(
    prompt("Enter an integer:")
);

let sum = 0;

for (let i = 0; i <= sumNumber; i++) {
    sum += i;
}

alert("Sum = " + sum);



// ========================================
// Q13
// Calculate the average from 0
// To the number entered by the user
// ========================================

let averageNumber = Number(
    prompt("Enter an integer:")
);

let total = 0;

for (let i = 0; i <= averageNumber; i++) {
    total += i;
}

let average = total / (averageNumber + 1);

alert("Average = " + average);