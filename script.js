let computerScore = 0;
let humanScore = 0;
const numberOfWins = 3;

const container = document.getElementById("container")
const score = document.getElementById("score")

function humanChoice(){
    container.addEventListener("click", (e) =>{
        const target = e.target
        switch (target.id) {
            case "rock":
                return "Rock"
            case "paper":
                return "Paper"
            case "scissors":
                return "Scissors"
        }
    })
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
    } 
    else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper"){
        humanScore += 1;
        score.textContent = `${humanScore} : ${computerScore}`
    }
    else if (computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice === "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper"){
        computerScore += 1;
        score.textContent = `${humanScore} : ${computerScore}`
    }
}

function gameHandler(numberOfWins){
    while(humanScore < numberOfWins && computerScore < numberOfWins){
        roundHandler(humanChoice(), computerChoice())
    }
}
gameHandler(numberOfWins)