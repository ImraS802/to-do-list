function clickButton () {
    let purpose = prompt("Why are you visiting this page - for work or for private reasons?");
    let workStatus = prompt("Are you an employee or an employer?");
    if (purpose === "work" && workStatus === "employer") {
            alert("This is just an example of a web page.");
        } else if (purpose !== "work" || workStatus !== "employer") {
            alert("Take a look around!");
        }
    let toDoList = prompt("Do you want to take a glimpse on my to-do-list?");
    if (toDoList === "Yes") {
    alert(toDoList + "? Then welcome!");
    } else if (toDoList === "No") {
        alert(toDoList + "? Then please leave this page!");
    } else {
    alert("Sorry, this is not a valid answer. Please type 'Yes' or 'No' instead. Make sure to use an uppercase letter in the beginning.");
    }
    }
    
    clickButton();
