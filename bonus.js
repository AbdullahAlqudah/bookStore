// ========================================
// BONUS CHALLENGE
// Smart Bookstore Checkout System
// ========================================


// 1. System Data
let availableBooks = [
    "Clean Code",
    "JS for Beginners",
    "C# in Depth",
    "Web Design"
];

let bookPrices = [
    20,
    15,
    30,
    10
];


// 2. Membership Validation Function
function getValidMembership() {

    let membership = prompt(
        "Enter membership type: student or regular"
    );

    membership = membership.toLowerCase();

    while (
        membership !== "student" &&
        membership !== "regular"
    ) {

        alert("Invalid membership type!");

        membership = prompt(
            "Please enter student or regular"
        );

        membership = membership.toLowerCase();
    }

    return membership;
}


// 3. Shopping Function
function startShopping() {

    let cartBooks = [];
    let cartPrices = [];

    while (true) {

        let bookName = prompt(
            "Enter a book name or type 'checkout' to finish:"
        );

        // Stop shopping
        if (bookName === "checkout") {
            break;
        }

        // Search for the book
        let bookIndex = availableBooks.indexOf(bookName);

        if (bookIndex !== -1) {

            // Add book to cart
            cartBooks.push(bookName);

            // Add its price
            cartPrices.push(bookPrices[bookIndex]);

            alert("Book added to cart.");

        } else {

            alert("Book is out of stock.");

        }
    }

    return [cartBooks, cartPrices];
}


// 4. Calculate Total
function calculateTotal(pricesArray, membershipType) {

    let total = 0;

    // Calculate total price
    for (let i = 0; i < pricesArray.length; i++) {

        total += pricesArray[i];

    }

    // Apply 20% student discount
    if (membershipType === "student") {

        total = total * 0.8;

    }

    return total;
}


// ========================================
// 5. Main Execution
// ========================================


// Ask for user name
let customerName = prompt("Enter your name:");


// Get valid membership
let customerMembership = getValidMembership();


// Start shopping
let cartData = startShopping();


// Get books and prices from returned array
let cartBooks = cartData[0];
let cartPrices = cartData[1];


// Calculate final total
let finalTotal = calculateTotal(
    cartPrices,
    customerMembership
);


// ========================================
// Print Receipt
// ========================================

console.log("===== BOOKSTORE RECEIPT =====");

console.log("Name: " + customerName);

console.log("Membership: " + customerMembership);

console.log("Purchased Books:");


// Print books one by one
for (let i = 0; i < cartBooks.length; i++) {

    console.log("- " + cartBooks[i]);

}

console.log("Final Total: $" + finalTotal);