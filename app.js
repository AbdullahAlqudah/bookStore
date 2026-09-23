// =========================
// EX2 - Loops and Functions
// =========================


// Function to validate membership type
function getValidMembership() {

    let membership = prompt(
        "Enter your membership type: student or regular"
    );

    membership = membership.toLowerCase();

    // Keep asking until the user enters a valid membership
    while (membership !== "student" && membership !== "regular") {

        alert("Invalid membership type!");

        membership = prompt(
            "Please enter student or regular"
        );

        membership = membership.toLowerCase();
    }

    return membership;
}


// Function to collect user data
function registerMember() {

    // Ask for user's name
    let userName = prompt("Enter your name:");


    // Get valid membership type
    let membership = getValidMembership();


    // Welcome message based on membership type
    if (membership === "student") {

        alert("Welcome Scholar " + userName);

    } 
    else if (membership === "regular") {

        alert("Welcome Member " + userName);

    }


    // Ask for book genre
    let genre = prompt(
        "Do you prefer fiction or non-fiction?"
    );


    // Ask for book title
    let bookTitle = prompt(
        "Enter the title of the book you want to borrow:"
    );


    // Reservation message
    alert(
        "Your requested book \"" +
        bookTitle +
        "\" is being reserved."
    );


    // Store all user data in an array
    let userData = [
        userName,
        membership,
        genre,
        bookTitle
    ];


    // Print each element of the array
    for (let i = 0; i < userData.length; i++) {

        console.log(userData[i]);

    }


    // Return the array for later use in EX3
    return userData;
}

// =========================
// EX3 - Arrays
// =========================


// 1. Available book genres
let availableGenres = [
    "Fiction",
    "Science",
    "History",
    "Biography"
];


// 2. Apply discount based on membership type
function applyDiscount(userData) {

    // Membership type is at index 1
    if (userData[1] === "student") {

        userData.push("20% Discount");

    } 
    else if (userData[1] === "regular") {

        userData.push("No Discount");

    }

    return userData;
}


// Apply the discount to the user from EX2
userData = applyDiscount(userData);

console.log("User Data After Discount:");

for (let i = 0; i < userData.length; i++) {
    console.log(userData[i]);
}


// 3. Add a new genre
function addNewGenre(genre) {

    availableGenres.push(genre);

}


// Example: add a new genre
addNewGenre("Technology");


// 4. Display all available genres
function displayGenres() {

    for (let i = 0; i < availableGenres.length; i++) {

        console.log("- We offer: " + availableGenres[i]);

    }

}


// Display genres
displayGenres();


// Run the function
let userData = registerMember();