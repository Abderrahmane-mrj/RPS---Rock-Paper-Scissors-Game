let scoreWins = 0;
let scoreLosses = 0;
let scoreNull = 0;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let theWinner = document.getElementById('theWinner');
let resultText = document.getElementById('resultText');

resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;

rock.onclick = function() {
  const boot = Math.random();
  if( boot >= 0 && boot < 1/3 ){
    scoreLosses++;
    theWinner.innerHTML = 'The bot choose Paper You Are Lose'
    resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;
  } else if ( boot >= 1/3 && boot < (1-(1/3)) ){
    scoreWins++;
    theWinner.innerHTML = `The bot choose scissor You Are Win`;
    resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;
  } else {
    scoreNull++;
    theWinner.innerHTML = `The bot choose rock It's a NULL`;
    resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;
  }
}

paper.onclick = function() {
  const boot = Math.random();
  if( boot >= 0 && boot < 1/3 ){
    scoreNull++;
    theWinner.innerHTML = `The bot choose Paper It's a NULL`;
    resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;
  } else if ( boot >= 1/3 && boot < (1-(1/3)) ){
    scoreLosses++;
    theWinner.innerHTML = 'The bot choose scissor You Are Lose'
    resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;
  } else {
    scoreWins++;
    theWinner.innerHTML = `The bot choose rock You Are Win`;
    resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;
  }
}

scissors.onclick = function() {
  const boot = Math.random();
  if( boot >= 0 && boot < 1/3 ){
    scoreWins++;
    theWinner.innerHTML = `The bot choose Paper You Are Win`;
    resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;
  } else if ( boot >= 1/3 && boot < (1-(1/3)) ){
    scoreNull++;
    theWinner.innerHTML = `The bot choose scissor It's a NULL`;
    resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;
  } else {
    scoreLosses++;
    theWinner.innerHTML = 'The bot choose rock You Are Lose'
    resultText.innerHTML = `Wins: ${scoreWins}, Losses: ${scoreLosses}, Null: ${scoreNull} `;
  }
}
