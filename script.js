let computerScore = 0;
let humanScore = 0;
const numberOfWins = 5;

const container = document.getElementById("container")
const score = document.getElementById("score")
const status = document.getElementById("status")

function humanChoice(e){
    const target = e.target
    switch (target.id) {
        case "rock":
            return "Rock"
        case "paper":
            return "Paper"
        case "scissors":
            return "Scissors"
    }
}
function computerChoice(){
    let randNumber = Math.random()
    if (randNumber <= 0.333){
        return "Rock"
    }
    else if (randNumber > 0.333 && randNumber <=0.666){
        return "Paper"
    } 
    else {
        return "Scissors"
    }
}

function roundHandler(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        score.textContent = `${humanScore} : ${computerScore}`
        status.textContent = `${computerChoice}! It is a tie!`;
    } 
    else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper"){
        humanScore += 1;
        score.textContent = `${humanScore} : ${computerScore}`
        status.textContent = `${computerChoice}! You Won!`;
    }
    else if (computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice === "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper"){
        computerScore += 1;
        score.textContent = `${humanScore} : ${computerScore}`
        status.textContent = `${computerChoice}! You Lost!`;
    }
}
function newGame(){
    humanScore = 0
    computerScore = 0
    score.textContent = `${humanScore} : ${computerScore}`
}
function newGameHandling(){
    const newBtn = document.createElement("button")
    newBtn.textContent = "New Game?"
    score.appendChild(newBtn)
    newBtn.addEventListener("click", () => {
        newGame();
    })
}

function gameHandler(numberOfWins){
    container.addEventListener("click", (e) =>{
        if(humanScore < numberOfWins && computerScore < numberOfWins){
            const humanSelection = humanChoice(e)
            const computerSelection = computerChoice()
            roundHandler(humanSelection, computerSelection)
        }
        else{
            score.textContent = `Game ended with score ${humanScore} : ${computerScore}`
            newGameHandling();
        }
    })
}
gameHandler(numberOfWins)