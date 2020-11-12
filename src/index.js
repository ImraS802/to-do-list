let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
alert("Welcome " + firstName +" "+ lastName );
let toDoList = prompt("Do you want to take a glimpse on my to-do-list?");
if (toDoList === "Yes") {
alert(toDoList + "? Then welcome!");
} else if (toDoList === "No") {
    alert(toDoList + "? Then please leave this page!");
} else {
alert("Sorry, this is not a valid answer. Please type yes or no instead.");
}
