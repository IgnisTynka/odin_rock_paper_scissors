function computerPlay(){
    const moves = ['rock', 'paper', 'scissors'];
    let selected_move = moves[Math.floor(Math.random()*3)];
    return selected_move;
}

function playRound(playerSelection, computerSelection){
    let playerImage = 'images/player/' + playerSelection + '.png';
    player_move.src = playerImage;
    let computerImage = 'images/computer/' + computerSelection + '.png';
    computer_move.src = computerImage;
    if(playerSelection == computerSelection){
        return 2;
    }else{
        switch (playerSelection) {
            case 'rock':
                if (computerSelection == 'scissors'){
                    return 1;
                }else{
                    return 0;
                }
                break;
        
            case 'paper':
                if (computerSelection == 'rock'){
                    return 1;
                }else{
                    return 0;
                }
                break;
            case 'scissors':
                if (computerSelection == 'paper'){
                    return 1;
                }else{
                    return 0;
                }
                break;
        }
    }
}

function game(playerSelection){
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    return result;
}

function playerWin(){
    winner.innerText = "Player win!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    win_box.classList.toggle("not_win")
    again.addEventListener('click', () => {
        location.reload(true);
    })
}

function computerWin(){
    winner.innerText = "Computer win!"
    win_box.classList.toggle("not_win")
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    again.addEventListener('click', () => {
            location.reload(true);
    })
}

let playerScore = 0;
let computerScore = 0;


rock.addEventListener('click', () => {
    result = game('rock');
    if(result == 1){
        playerScore++;
        p_score.innerText = playerScore;
    }else if(result == 0){
        computerScore++;
        c_score.innerText = computerScore;
    }
    if(playerScore == 5){
        playerWin();
    }else if(computerScore == 5){
        computerWin();
    }
})

paper.addEventListener('click', () => {
    result = game('paper'); 
    if(result == 1){
        playerScore++;
        p_score.innerText = playerScore;
    }else if(result == 0){
        computerScore++;
        c_score.innerText = computerScore;
    }
    if(playerScore == 5){
        playerWin();
    }else if(computerScore == 5){
        computerWin();
    }
})

scissors.addEventListener('click', () => {
    result = game('scissors');
    if(result == 1){
        playerScore++;
        p_score.innerText = playerScore;
    }else if(result == 0){
        computerScore++;
        c_score.innerText = computerScore;
    }
    if(playerScore == 5){
        playerWin();
    }else if(computerScore == 5){
        computerWin();
    }
})





