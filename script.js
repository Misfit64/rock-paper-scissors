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


function playGame(){
    
    let humanScore = 0, computerScore = 0;
    
    function playRound(humanChoice,computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice == "rock"){
            if(computerChoice == "paper"){
                computerScore++;
                console.log("You lose! Paper beats Rock");
            }
            else if (computerChoice == "scissors"){
                humanScore++;
                console.log("You win! Rock beats Scissors");
            }
            else if (computerChoice == "rock"){
                console.log("Tie!");
            }
        }
        else if(humanChoice == "paper"){
            if(computerChoice == "paper"){
                console.log("Tie!");
            }
            else if (computerChoice == "scissors"){
                computerScore++;
                console.log("You lose! Scissors beats Paper");
            }
            else if (computerChoice == "rock"){
                humanScore++;
                console.log("You win! Paper beats Rock");
            }
        }
        else if(humanChoice == "scissors"){
            if(computerChoice == "paper"){
                humanScore++;
                console.log("You win! Scissors beats Paper");
            }
            else if (computerChoice == "scissors"){
                console.log("Tie!");
            }
            else if (computerChoice == "rock"){
                computerScore++;
                console.log("You lose! Rock beats Scissors");
            }
        }
    }
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection);
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
        console.log(`Human Score is ${humanScore}`);
        console.log(`Computer Score is ${computerScore}`);
    }
}



playGame();