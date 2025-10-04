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

function updateDisplay(humanSelection, computerSelection){
    let humanDisplayChoice = document.querySelector("span#humanChoice");
    let computerDisplayChoice = document.querySelector("span#computerChoice");
    humanDisplayChoice.textContent = humanSelection;
    computerDisplayChoice.textContent = computerSelection;

    let humanDisplayScore = document.querySelector("span#humanScore");
    let computerDisplayScore = document.querySelector("span#computerScore");
    humanDisplayScore.textContent = humanScore;
    computerDisplayScore.textContent = computerScore;
}

let button = document.querySelectorAll("button");
function choice(e){
    let humanSelection = e.target.className;
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    updateDisplay(humanSelection, computerSelection);
    if(humanScore == 5 || computerScore == 5){
        if(humanScore == 5){
            result.textContent = "You Win!"
        }
        else if(computerScore == 5){
            result.textContent = "You Lose!"  
        }
        button.forEach(btn => btn.removeEventListener("click",choice));
        document.querySelector("div.container").classList.toggle("hidden");
        result.classList.toggle("win");
        
        let retry = document.createElement("button");
        retry.classList.add("retry");
        retry.textContent = "Play Again";
        result.after(retry);
        retry.addEventListener("click",() => {location.reload()});
    }

}
button.forEach(btn => btn.addEventListener("click",choice))

let humanScore = 0, computerScore = 0;

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
