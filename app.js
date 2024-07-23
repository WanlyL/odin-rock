let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

function getComputerChoice(){
    const options = ['rock','paper','scissors'];
   return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice(){
    userInput = ''
    return userInput;
}

function playRound(humanChoice, computerChoice){
    const resultDiv = document.querySelector(".result");
    if(humanChoice === computerChoice){
        const p = document.createElement("p")
        p.innerText = `This game is a tie, you both picked ${humanChoice}`
        resultDiv.appendChild(p)
    }else if (humanChoice === 'rock' && computerChoice === 'paper'){
        const p = document.createElement("p")
        p.innerText = `You lose! ${computerChoice} beats ${humanChoice}`
        result.appendChild(p)
        humanScore++;
    }else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        const p = document.createElement("p")
        p.innerText = `You win! ${humanChoice} beats ${computerChoice}`
        resultDiv.appendChild(p)
        humanScore++;
    }else if (humanChoice === 'paper' && computerChoice === 'rock'){
        const p = document.createElement("p")
        p.innerText = `You win! ${humanChoice} beats ${computerChoice}`
        resultDiv.appendChild(p)
        humanScore++;
    }else{
        const p = document.createElement("p")
        p.innerText = `Loser! ${computerChoice} wins`
        resultDiv.appendChild(p)
        computerScore++;
    }
}

rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const humanSelection = 'rock'
    playRound(computerSelection, humanSelection)
})

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const humanSelection = 'paper'
    playRound(computerSelection, humanSelection)
})

scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const humanSelection = 'scissors'
    playRound(computerSelection, humanSelection)
})












