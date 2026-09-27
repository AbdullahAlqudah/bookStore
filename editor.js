// =============================
// Select Text
// =============================

let textArea =
    document.getElementById("textArea");


// =============================
// Bold
// =============================

document
    .getElementById("boldButton")
    .addEventListener("click", function() {

        if (
            textArea.style.fontWeight === "bold"
        ) {

            textArea.style.fontWeight =
                "normal";

        } else {

            textArea.style.fontWeight =
                "bold";

        }

    });


// =============================
// Italic
// =============================

document
    .getElementById("italicButton")
    .addEventListener("click", function() {

        if (
            textArea.style.fontStyle === "italic"
        ) {

            textArea.style.fontStyle =
                "normal";

        } else {

            textArea.style.fontStyle =
                "italic";

        }

    });


// =============================
// Alignment
// =============================

document
    .getElementById("leftButton")
    .addEventListener("click", function() {

        textArea.style.textAlign = "left";

    });


document
    .getElementById("centerButton")
    .addEventListener("click", function() {

        textArea.style.textAlign = "center";

    });


document
    .getElementById("rightButton")
    .addEventListener("click", function() {

        textArea.style.textAlign = "right";

    });


// =============================
// Upper Case
// =============================

document
    .getElementById("upperButton")
    .addEventListener("click", function() {

        textArea.textContent =
            textArea.textContent.toUpperCase();

    });


// =============================
// Lower Case
// =============================

document
    .getElementById("lowerButton")
    .addEventListener("click", function() {

        textArea.textContent =
            textArea.textContent.toLowerCase();

    });


// =============================
// Capitalize
// =============================

document
    .getElementById("capitalizeButton")
    .addEventListener("click", function() {

        let words =
            textArea.textContent
                .toLowerCase()
                .split(" ");

        for (let i = 0; i < words.length; i++) {

            words[i] =
                words[i].charAt(0).toUpperCase() +
                words[i].slice(1);

        }

        textArea.textContent =
            words.join(" ");

    });


// =============================
// Clear Text
// =============================

document
    .getElementById("clearButton")
    .addEventListener("click", function() {

        textArea.textContent = "";

    });


// =============================
// Text Color
// =============================

document
    .getElementById("textColor")
    .addEventListener("input", function(event) {

        textArea.style.color =
            event.target.value;

    });


// =============================
// Background Color
// =============================

document
    .getElementById("backgroundColor")
    .addEventListener("input", function(event) {

        textArea.style.backgroundColor =
            event.target.value;

    });


// =============================
// Font Size
// =============================

document
    .getElementById("fontSize")
    .addEventListener("input", function(event) {

        textArea.style.fontSize =
            event.target.value + "px";

    });


// =============================
// Font Family
// =============================

document
    .getElementById("fontFamily")
    .addEventListener("change", function(event) {

        textArea.style.fontFamily =
            event.target.value;

    });