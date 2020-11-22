function clickButton () {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");

    let h1 = document.querySelector("h1");
    h1.innerHTML = "To-do list for " + name +"!"
   
    }

    let personalizationButton = document.querySelector("button");
    personalizationButton.addEventListener("click", clickButton);
    
