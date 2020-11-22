function clickButton () {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    alert("Thank you for subscribing " + name +"!")
    }

    let newsletterButton = document.querySelector("button");
    newsletterButton.addEventListener("click", clickButton);
    
