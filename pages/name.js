var player1Name = prompt("Name of the Player1?");
var player2Name = prompt("Name of the Player2?");

document.querySelectorAll("h2")[0].innerHTML = player1Name;
document.querySelectorAll("h2")[1].innerHTML = player2Name;

localStorage.setItem("player1", player1Name);
localStorage.setItem("player2", player2Name);