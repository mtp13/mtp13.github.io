let firstCard = null;
let secondCard = null;
let preventClick = null;
let numberOfTries = 0;

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function setupGame() {
    const uniqueColors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "brown",
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
    }
}

function resetCards() {
    numberOfTries += 1;
    if (document.querySelectorAll("[data-matched='false']").length > 0) {
        document.getElementById("status").innerHTML =
            "Click two cards to play. Tries: " + numberOfTries;
        firstCard = null;
        secondCard = null;
        preventClick = null;
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
        if (firstCard.dataset.color === secondCard.dataset.color) {
            document.getElementById("status").innerHTML = "Match Found";
            setTimeout(resetCards, 750);
            firstCard.dataset.matched = secondCard.dataset.matched = "true";
        } else {
            document.getElementById("status").innerHTML = "Match Not Found";
            setTimeout(function () {
                firstCard.style.backgroundColor = "white";
                secondCard.style.backgroundColor = "white";
                resetCards();
            }, 750);
        }
    }
}
