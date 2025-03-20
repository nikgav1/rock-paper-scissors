let computerScore = 0;
let humanScore = 0;
const numberOfWins = 5;

function humanChoice(){
    let choice = prompt("Choose: Rock, Paper, Scissors!")
    return choice;
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
        console.log(`Draw, ${humanScore} : ${computerScore}`)
    } 
    else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper"){
        humanScore += 1;
        console.log(`You won, ${humanScore} : ${computerScore}`)
    }
    else if (computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice === "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper"){
        computerScore += 1;
        console.log(`Computer won, ${humanScore} : ${computerScore}`)
    }
}
function gameHandler(){
    if(humanScore != numberOfWins || computerScore != numberOfWins){
        roundHandler(humanChoice(), computerChoice())
    }
}