function updateHeading(newHeading) {
    let heading = document.querySelector("h1");
    heading.innerHTML = newHeading;
}


    function clickButton() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email adress?");
    
    if (name.length > 0 && email.length > 0) {
    updateHeading(`To-do list for <em>${name}</em>!`);
   } else {
    updateHeading(`Sorry <em>${name}</em> we cannot personalize this webpage for you!`);
}
}

    let personalizationButton = document.querySelector("button");
    personalizationButton.addEventListener("click", clickButton);
    
    