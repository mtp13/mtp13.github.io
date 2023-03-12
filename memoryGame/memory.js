let firstCard = null;
let secondCard = null;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function setupGame() {
  const uniqueColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink",
  ];

  let color = "";
  let cardColors = [...uniqueColors, ...uniqueColors];
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    color = cardColors.splice(getRandomNumber(cardColors.length), 1);
    cards[i].dataset.color = color;
    cards[i].addEventListener("click", onCardClicked);
  }
}

function resetCards() {
  document.getElementById("status").innerHTML = "Click two cards to play.";
  firstCard = null;
  secondCard = null;
}
function onCardClicked() {
  if (!firstCard) {
    firstCard = this;
    firstCard.style.backgroundColor = firstCard.dataset.color;
  } else {
    secondCard = this;
    secondCard.style.backgroundColor = secondCard.dataset.color;
    if (firstCard.dataset.color === secondCard.dataset.color) {
      console.log("matched");
      document.getElementById("status").innerHTML = "Match Found";
      setTimeout(resetCards, 1000);
    } else {
      document.getElementById("status").innerHTML = "Match Not Found";
      setTimeout(function () {
        firstCard.style.backgroundColor = "white";
        secondCard.style.backgroundColor = "white";
        resetCards();
      }, 1000);
    }
  }
}
