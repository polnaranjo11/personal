const playertext = document.querySelector("#playertext");
const AItext = document.querySelector("#AItext");
const resulttext = document.querySelector("#resulttext");
const buttons = document.querySelectorAll(".button");
console.log(buttons)
let player;
let AI;
let Result;

buttons.forEach(button => {
	button.addEventListener("click", () => {
		player = button.textContent;
		computerTurn();
		playertext.textContent = player;
		AItext.textContent = AI;	
		resulttext.textContent = checkWinner();
	})
});

function computerTurn(){
	const randNum = Math.floor(Math.random() * 3) + 1;
	switch(randNum){
		case 1:
			AI = "ROCK";
			break;
		case 2:
			AI = "PAPER";
			break;
		case 3:
			AI = "SCISSORS";
			break;

	}
}
function checkWinner(){
	if(player == AI){
		return "TIE!";
	}
	else if(AI == "ROCK"){
		return (player == "PAPER") ? "WINNER" : "LOSER"
	}
	else if(AI == "PAPER"){
		return (player == "SCISSORS") ? "WINNER" : "LOSER"
	}
	else if(AI == "SCISSORS"){
		return (player == "ROCK") ? "WINNER" : "LOSER"
	}
}