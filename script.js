function computerPlay(){
    const moves = ['rock', 'paper', 'scissors'];
    let move_number = Math.floor(Math.random()*3);
    let selected_move = moves[move_number];
    console.log('Compuert choose ' + selected_move);
    return selected_move;
}

function playRound(playerSelection, computerSelection){
    let playerImage = 'images/player/' + playerSelection + '.png';
    player_move.src = playerImage;
    let computerImage = 'images/computer/' + computerSelection + '.png';
    computer_move.src = computerImage;
    if(playerSelection == computerSelection){
        console.log('Draw!')
    }else{
        switch (playerSelection) {
            case 'rock':
                if (computerSelection == 'scissors'){
                    console.log('You win! Rock beats scissors')
                    return 1;
                }else{
                    console.log('You lose! Paper beats rock')
                    return 0;
                }
                break;
        
            case 'paper':
                if (computerSelection == 'rock'){
                    console.log('You win! Paper beats rock')
                    return 1;
                }else{
                    console.log('You lose! Scissors beat paper')
                    return 0;
                }
                break;
            case 'scissors':
                if (computerSelection == 'paper'){
                    console.log('You win! Scissors beat paper')
                    return 1;
                }else{
                    console.log('You lose! Rock beats scissors')
                    return 0;
                }
                break;
            default:
                alert('bad move')
                break;
        }
    }
}

let playerScore = 0;
let computerscore = 0;

function game(playerSelection){
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}



rock.addEventListener('click', () => {
    game('rock');
})

paper.addEventListener('click', () => {
    game('paper');
})

scissors.addEventListener('click', () => {
    game('scissors');
})
