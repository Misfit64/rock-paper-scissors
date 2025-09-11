function getComputerChoice(){
    let computerChoice = Math.random();
    if(computerChoice <= 0.33){
        return "rock";
    }
    else if(computerChoice >=0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}
// console.log(getComputerChoice());
// console.log("finish");

function getHumanChoice(){
    let humanChoice = prompt("Enter your Choice");
    return humanChoice;
}
// console.log(getHumanChoice());

let humanScore = 0, computerScore = 0;

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice = "rock") && (computerChoice = "paper")){
        computerScore++;
        console.log("You lose! Paper beats Rock")
    }
}