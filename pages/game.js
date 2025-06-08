var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "../images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "../images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);

const player1Name = localStorage.getItem("player1") || "Player 1";
const player2Name = localStorage.getItem("player2") || "Player 2";

document.querySelector(".p1").innerHTML = player1Name;
document.querySelector(".p2").innerHTML = player2Name;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `${player1Name} Wins🚩`
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = `${player2Name} Wins🚩`
} else {
    document.querySelector("h1").innerHTML = "Draw🎲";
}