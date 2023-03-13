let firstCard = null;
let secondCard = null;
let preventClick = null;
let numberOfTries = 0;

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function setupGame() {
    console.log("Cole is at Gigi's house right now.");
    const uniqueColors = [
        "red",
        "blue",
        "green",
        "yellow",
        "darkorange",
        "purple",
        "saddlebrown",
        "black",
    ];

    let color = "";
    let cardColors = [...uniqueColors, ...uniqueColors];
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        color = cardColors.splice(getRandomNumber(cardColors.length), 1);
        cards[i].dataset.color = color;
        cards[i].dataset.matched = "false";
        cards[i].addEventListener("click", onCardClicked);
        cards[i].style.backgroundColor = "white";
        numberOfTries = 0;
        document.getElementById("status").innerHTML =
            "Click two cards to play. Tries: " + numberOfTries;
        firstCard = null;
        secondCard = null;
        preventClick = null;
    }
}

function setupForNextTry() {
    numberOfTries += 1;
    if (document.querySelectorAll("[data-matched='false']").length > 0) {
        firstCard = null;
        secondCard = null;
        preventClick = null;
        document.getElementById("status").innerHTML =
            "Click two cards to play. Tries: " + numberOfTries;
    } else {
        document.getElementById("status").innerHTML =
            "Good game! Tries: " + numberOfTries;
    }
}

function onCardClicked() {
    if (this === firstCard || preventClick || this.dataset.matched === "true") {
        return;
    }
    preventClick = true;
    if (!firstCard) {
        firstCard = this;
        firstCard.style.backgroundColor = firstCard.dataset.color;
        preventClick = null;
    } else {
        secondCard = this;
        secondCard.style.backgroundColor = secondCard.dataset.color;
        if (secondCard.dataset.color === firstCard.dataset.color) {
            firstCard.dataset.matched = secondCard.dataset.matched = "true";
            document.getElementById("status").innerHTML = "Match Found";
            setTimeout(setupForNextTry, 500);
        } else {
            document.getElementById("status").innerHTML = "Match Not Found";
            setTimeout(function () {
                firstCard.style.backgroundColor = "white";
                secondCard.style.backgroundColor = "white";
                setupForNextTry();
            }, 500);
        }
    }
}
