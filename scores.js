// =============================
// Arrays
// =============================

let names = [
    "Ben",
    "Joel",
    "Judy",
    "Anne"
];

let scores = [
    88,
    98,
    77,
    88
];


// =============================
// Select Elements
// =============================

let nameInput =
    document.getElementById("name");

let scoreInput =
    document.getElementById("score");

let results =
    document.getElementById("results");

let scoresBody =
    document.getElementById("scoresBody");


// =============================
// Display Results
// =============================

function displayResults() {

    let total = 0;

    let highest = scores[0];


    for (let i = 0; i < scores.length; i++) {

        total += scores[i];

        if (scores[i] > highest) {

            highest = scores[i];

        }
    }


    let average =
        total / scores.length;


    results.innerHTML =
        "<h2>Results</h2>" +
        "<p>Average score = " +
        average.toFixed(2) +
        "</p>" +
        "<p>High score = " +
        highest +
        "</p>";
}


// =============================
// Display Scores
// =============================

function displayScores() {

    scoresBody.innerHTML = "";


    for (let i = 0; i < names.length; i++) {

        let row =
            document.createElement("tr");


        let nameCell =
            document.createElement("td");

        nameCell.textContent =
            names[i];


        let scoreCell =
            document.createElement("td");

        scoreCell.textContent =
            scores[i];


        row.appendChild(nameCell);

        row.appendChild(scoreCell);

        scoresBody.appendChild(row);

    }
}


// =============================
// Add Score
// =============================

function addScore() {

    let name =
        nameInput.value.trim();

    let score =
        Number(scoreInput.value);


    // Validation
    if (
        name === "" ||
        scoreInput.value === "" ||
        score < 0 ||
        score > 100
    ) {

        alert(
            "You must enter a name and a valid score"
        );

        return;
    }


    // Add to arrays
    names.push(name);

    scores.push(score);


    // Clear inputs
    nameInput.value = "";

    scoreInput.value = "";


    // Focus Name
    nameInput.focus();
}


// =============================
// Events
// =============================

document
    .getElementById("addScore")
    .addEventListener(
        "click",
        addScore
    );


document
    .getElementById("displayResults")
    .addEventListener(
        "click",
        displayResults
    );


document
    .getElementById("displayScores")
    .addEventListener(
        "click",
        displayScores
    );


// Focus Name when page starts
nameInput.focus();