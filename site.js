console.log(document.querySelector('nav'))

const footer = document.querySelector("footer")
const copyright = footer.querySelector("p")
    copyright.textContent = `${new Date().getFullYear()} All rights reserved.`;

const links = document.querySelectorAll('nav a')

links.forEach(link => {
    link.style.fontWeight= 'bold'
})

const hours = new Date().getHours()

let welcomeMessage;

    if (hours >= 4 && hours < 12) {
        welcomeMessage = "It is too early for this..."
    }

    else if (hours >= 12 && hours < 17) {
        welcomeMessage = "It's after noonish right? Time for coffee number 12!"
    }

    else {
        welcomeMessage = "Time to daydream about sleep."
    }

const welcomeDiv = document.getElementById ('welcome');
welcomeDiv.textContent = welcomeMessage;

let secret = localStorage.getItem("It's a secret to everybody");
console.log(secret);