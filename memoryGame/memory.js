let firstCard = null;
let secondCard = null;
let preventClick = null;
let numberOfTries = 0;

// document.addEventListener("keydown", function (event) {
//     console.log("keydown pressed");
//     console.log(event.code);
//     if (event.code === "KeyT") {
//         toggleColor();
//     }
// });

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function resetGame() {
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

    for (let card of cards) {
        color = cardColors.splice(getRandomNumber(cardColors.length), 1);
        card.dataset.color = color;
        console.log(color);
        card.dataset.matched = "false";
        card.style.backgroundColor = "white";
        card.addEventListener("click", onCardClicked);
        document
            .querySelector("#new-game")
            .addEventListener("click", resetGame);
        firstCard = null;
        secondCard = null;
        preventClick = null;
        numberOfTries = 0;
        document.getElementById("status").innerHTML =
            "Click two squares to play. Tries: " + numberOfTries;
    }
}

function toggleColor() {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        if (card.innerHTML === "") {
            card.innerHTML = card.dataset.color;
        } else {
            card.innerHTML = "";
        }
    }
}

function resetNewTry() {
    numberOfTries += 1;
    if (document.querySelectorAll("[data-matched='false']").length > 0) {
        firstCard = null;
        secondCard = null;
        preventClick = null;
        document.getElementById("status").innerHTML =
            "Click two squares to play. Tries: " + numberOfTries;
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
            setTimeout(resetNewTry, 500);
        } else {
            document.getElementById("status").innerHTML = "Match Not Found";
            setTimeout(function () {
                firstCard.style.backgroundColor = "white";
                secondCard.style.backgroundColor = "white";
                resetNewTry();
            }, 500);
        }
    }
}

resetGame();
