let form =
    document.getElementById("shoppingForm");

let itemInput =
    document.getElementById("itemInput");

let shoppingList =
    document.getElementById("shoppingList");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    let item = itemInput.value.trim();

    // Do not add empty item
    if (item === "") {
        return;
    }


    // Create li
    let li =
        document.createElement("li");

    li.textContent = item;


    // Create delete button
    let deleteButton =
        document.createElement("button");

    deleteButton.textContent = "Delete";


    // Delete event
    deleteButton.addEventListener(
        "click",
        function() {

            li.remove();

        }
    );


    // Add button inside li
    li.appendChild(deleteButton);


    // Add li to list
    shoppingList.appendChild(li);


    // Clear input
    itemInput.value = "";


    // Focus input
    itemInput.focus();

});