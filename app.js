
// =========================
// EX3 - Events and DOM
// Bookstore & Reading Club
// =========================


// =========================
// 1. Select HTML Elements
// =========================

let form = document.getElementById("bookForm");

let usernameInput = document.getElementById("username");

let membershipInput = document.getElementById("membership");

let genreInput = document.getElementById("genre");

let bookTitleInput = document.getElementById("bookTitle");

let resultCard = document.getElementById("result-card");


// =========================
// 2. Arrays
// =========================

// Store user information
let userData = [];

// Available book genres
let availableGenres = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "History",
    "Biography",
    "Technology"
];


// =========================
// 3. Form Submit Event
// =========================

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();


    // Get input values
    let username = usernameInput.value.trim();

    let membership = membershipInput.value;

    let genre = genreInput.value;

    let bookTitle = bookTitleInput.value.trim();


    // =========================
    // 4. Validation
    // =========================

    // Check empty fields
    if (
        username === "" ||
        membership === "" ||
        genre === "" ||
        bookTitle === ""
    ) {

        resultCard.innerHTML =
            "<p>Please fill in all fields.</p>";

        return;
    }


    // Validate membership type
    if (
        membership !== "student" &&
        membership !== "regular"
    ) {

        resultCard.innerHTML =
            "<p>Invalid membership type!</p>";

        return;
    }


    // Validate book genre
    if (!availableGenres.includes(genre)) {

        resultCard.innerHTML =
            "<p>Please select a valid book genre.</p>";

        return;
    }


    // =========================
    // 5. Store Data in Array
    // =========================

    userData = [
        username,
        membership,
        genre,
        bookTitle
    ];


    // =========================
    // 6. Display Results
    // =========================

    displayUserData();

});


// =========================
// 7. Display User Data
// =========================

function displayUserData() {

    // Clear previous results
    resultCard.innerHTML = "";


    // Create heading
    let heading = document.createElement("h3");

    heading.textContent = "Registration Successful!";

    resultCard.appendChild(heading);


    // =========================
    // Welcome Message
    // =========================

    let welcomeMessage = document.createElement("p");

    if (userData[1] === "student") {

        welcomeMessage.textContent =
            "Welcome Scholar " + userData[0];

    } else {

        welcomeMessage.textContent =
            "Welcome Member " + userData[0];

    }

    resultCard.appendChild(welcomeMessage);


    // =========================
    // Display Array Data
    // =========================

    let labels = [
        "Username: ",
        "Membership: ",
        "Book Genre: ",
        "Book Title: "
    ];


    // Loop through user data
    for (let i = 0; i < userData.length; i++) {

        // Create paragraph
        let paragraph = document.createElement("p");

        // Add text
        paragraph.textContent =
            labels[i] + userData[i];

        // Append paragraph
        resultCard.appendChild(paragraph);

    }


    // =========================
    // Reservation Message
    // =========================

    let reservationMessage = document.createElement("p");

    reservationMessage.textContent =
        'Your requested book "' +
        userData[3] +
        '" is being reserved.';

    resultCard.appendChild(reservationMessage);


    // =========================
    // Membership Discount
    // =========================

    let discountMessage = document.createElement("p");

    if (userData[1] === "student") {

        discountMessage.textContent =
            "You have received a 20% discount!";

    } else {

        discountMessage.textContent =
            "No discount available for regular members.";

    }

    resultCard.appendChild(discountMessage);

}
