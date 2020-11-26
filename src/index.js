function updateHeading(newHeading) {
    let heading = document.querySelector("h1");
    heading.innerHTML = newHeading;
}

function emailAddress() {
    let email = prompt("What is your email adress?");
    return true;
}



function clickButton () {
    let name = prompt("What is your name?");

    if (emailAddress()) {
    updateHeading(`To-do list for ${name}!`);
   } else {
    updateHeading(`Sorry <em>${name}</em> we cannot personalize your request!`);
}
    }

    let personalizationButton = document.querySelector("button");
    personalizationButton.addEventListener("click", clickButton);
    
    