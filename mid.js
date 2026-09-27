// Select paragraph and heading
let paragraph = document.getElementById("paragraph");
let heading = document.getElementById("heading");


// =============================
// Exercise 01
// Highlight words longer than 8 characters
// =============================

let text = paragraph.textContent.trim();

let words = text.split(" ");

let newText = "";

for (let i = 0; i < words.length; i++) {

    let cleanWord = words[i].replace(".", "");

    if (cleanWord.length > 8) {

        newText +=
            '<span class="highlight">' +
            words[i] +
            "</span> ";

    } else {

        newText += words[i] + " ";
    }
}

paragraph.innerHTML = newText;


// =============================
// Exercise 02
// Add Google link after paragraph
// =============================

let link = document.createElement("a");

link.href = "https://google.com/";
link.textContent = "Source";

link.target = "_blank";

paragraph.after(link);


// =============================
// Exercise 03
// Put every sentence on new line
// =============================

paragraph.innerHTML =
    paragraph.innerHTML.replaceAll(
        ". ",
        ".<br>"
    );


// =============================
// Exercise 04
// Count words
// =============================

let wordCount = words.length;

let countText =
    document.createElement("p");

countText.textContent =
    "Word Count: " + wordCount;

heading.after(countText);