function computerPlay(){
    const moves = ['rock', 'paper', 'scissors'];
    let move_number = Math.floor(Math.random()*3);
    let selected_move = moves[move_number];
    console.log('Compuert choose ' + selected_move);
    return selected_move
}

function playRound(playerSelection, computerSelection){
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

function game(){
    let computer_score = 0;
    let player_score = 0;
    for (let i =0; i < 5; i++){
        playerSelection = prompt('Choose: rock, paper, scissors').toLowerCase();
        computerSelection = computerPlay();
        console.log('You choose ' +playerSelection);
        let result = playRound(playerSelection, computerSelection);
        if(result){
            player_score++;
        }else if(result == 0){
            computer_score++;
        }
    }
    console.log('Your score ' + player_score + ', computer score ' + computer_score)
}

game()

