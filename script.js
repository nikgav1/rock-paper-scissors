function humanChoice(){
    let choice = prompt("Choose: Rock, Paper, Scissors!")
    return choice;
}
function computerChoice(){
    let randNumber = Math.random()
    if (randNumber < 0.333){
        return "Rock"
    }
    else if (randNumber > 0.333 && randNumber <=0.666){
        return "Paper"
    } 
    else {
        return "Scissors"
    }
}