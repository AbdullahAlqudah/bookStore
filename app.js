function registerMember() {

    let userName = prompt("Enter your name:");

    let membership = prompt(
        "Enter your membership type: student or regular"
    );

    membership = membership.toLowerCase();

    if (membership === "student") {
        alert("Welcome Scholar " + userName);
    } 
    else if (membership === "regular") {
        alert("Welcome Member " + userName);
    } 
    else {
        alert("Welcome " + userName);
    }

    let genre = prompt(
        "Do you prefer fiction or non-fiction?"
    );

    let bookTitle = prompt(
        "Enter the title of the book you want to borrow:"
    );

    alert(
        "Your requested book \"" +
        bookTitle +
        "\" is being reserved."
    );

    console.log(
        userName + " ordered the book: " + bookTitle
    );
}