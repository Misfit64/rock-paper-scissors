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

    let button = document.querySelectorAll("button");
    function choice(e){
        let humanSelection = e.target.className;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    button.forEach(btn => btn.addEventListener("click",choice))

function playRound(humanChoice,computerChoice){
    let result = document.querySelector("div#result");
    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            computerScore++;
            result.textContent = "You lose! Paper beats Rock";
        }
        else if (computerChoice == "scissors"){
            humanScore++;
            result.textContent = "You win! Rock beats Scissors";
        }
        else if (computerChoice == "rock"){
            result.textContent = "Tie!";
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "paper"){
            result.textContent = "Tie!";
        }
        else if (computerChoice == "scissors"){
            computerScore++;
            result.textContent = "You lose! Scissors beats Paper";
        }
        else if (computerChoice == "rock"){
            humanScore++;
            result.textContent = "You win! Paper beats Rock";
        }
    }
    else if(humanChoice == "scissors"){
        if(computerChoice == "paper"){
            humanScore++;
            result.textContent = "You win! Scissors beats Paper";
        }
        else if (computerChoice == "scissors"){
            result.textContent = "Tie!";
        }
        else if (computerChoice == "rock"){
            computerScore++;
            result.textContent = "You lose! Rock beats Scissors";
        }
    }
}
let humanScore = 0, computerScore = 0;

// function playGame(){
    
    
    // for(let i = 0; i < 5; i++){
        // const humanSelection = getHumanChoice();
        // const computerSelection = getComputerChoice();
        // console.log(humanSelection);
        // console.log(computerSelection);
        // playRound(humanSelection, computerSelection);
        // console.log(`Human Score is ${humanScore}`);
        // console.log(`Computer Score is ${computerScore}`);
    // }
// }



// playGame();