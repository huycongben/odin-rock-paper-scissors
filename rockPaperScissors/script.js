const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}
console.log(getComputerChoice(["Rock", "Paper", "Scissors"]));

let playerSelection = prompt("What is your choice?");

const computerSelection = getComputerChoice(choices);

function playRound(playerSelection, computerSelection) {
    let result = "";
  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      return result = "Draw";
    } else if (computerSelection === "Paper") {
      return "You lose . Paper beats rock.";
    } else {
      return result = "You win. Rock beats Scissors.";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Paper") {
      return result = "Draw";
    } else if (computerSelection === "Rock") {
      return result = "You win. Paper beats rock.";
    } else {
      return result = "You lose. Scissors beat paper.";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Scissors") {
      return result = "Draw";
    } else if (computerSelection === "Rock") {
      return result = "You lose. Rock beats scissors";
    } else {
      return result = "You lose. Scissors beat paper.";
    }
  }
  return result;
}
console.log (playRound(playerSelection,computerSelection));
