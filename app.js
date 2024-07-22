function getComputerChoice(){
    const options = ['rock','paper','scissors'];
   return options[Math.floor(Math.random() * options.length)];
}
console.log(getComputerChoice());

function getHumanChoice(){
    const userInput = prompt('Please choose rock, paper or scissors');
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log('Tie game pal');
    }else if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log("You win! rock beats paper");
        humanScore++;
    }else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('You win! scissors beats paper');
        humanScore++;
    }else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('You win! paper beats rock.');
        humanScore++;
    }else{
        console.log('Loser!! Computer wins!');
        computerScore++;
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
    for (let i =0; i < 5; i++){
        console.log(playRound(getComputerChoice(), getHumanChoice()));
    }
}
console.log(playGame());








