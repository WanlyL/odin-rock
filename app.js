function getComputerChoice (){
    const choice = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    //Math.floor => rounds down & returns largest integer less than or equal to give number
    //Math.random => static method returns number > or = to 1 
    return choice[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice (){
    const userInput = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];

    if (validChoices.includes(userInput)) {
        return userInput;
    }else {
        return "Invalid choice. Please enter rock, paper or scissors"
    }
}

console.log(getHumanChoice());

function playRound (humanScore, computerScore){
    if (humanScore === computerScore){
        return "its a tie no one wins!";
    }else if (computerScore === "rock" && humanScore === "scissors"){
        return "You lose rock beats scissors";
    }else if (computerScore === "paper" && humanScore === "rock"){
        return "you lose paper beats rock";
    }else if (computerScore === "paper" && humanScore === "scissors"){
        return "You win scissors beat rock";
    }else {
        return "You lose ${computerScore} beats ${humanScore }";
    }
    
}

const humanScore = prompt("Start the game by picking among 'rock, paper, scissors'").toLowerCase();
const computerScore = getComputerChoice();

console.log(playRound(humanScore, computerScore))


const huamanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

playRound(huamanSelection, computerSelection);




