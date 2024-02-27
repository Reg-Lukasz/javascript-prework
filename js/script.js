var argButtonName, buttonRock, buttonPaper, buttonScissors, buttonRestart, playerWins, computerWins;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonRestart = document.getElementById('button-restart');
playerWins = 0;
computerWins = 0;

/**
 * Function checking which button was clicked
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

  /**
   * Function that determines a choice
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
  }

  /**
   * Function that determines the outcome of the game
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      playerWins++;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!')
      playerWins++;
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!')
      playerWins++;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
      computerWins++;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){
  document.getElementById('button-restart').style.display = 'inline';
  document.getElementById('messages').style.display = 'inline';
  document.getElementById('result').style.display = 'inline';
  document.getElementById('game').style.display = 'none';
  buttonClicked('kamień');
  clearResult();
  printResult('Gracz ' + playerWins + ' : ' + computerWins + ' Komputer');
});

buttonPaper.addEventListener('click', function(){
  document.getElementById('button-restart').style.display = 'inline';
  document.getElementById('messages').style.display = 'inline';
  document.getElementById('result').style.display = 'inline';
  document.getElementById('game').style.display = 'none';
  buttonClicked('papier');
  clearResult();
  printResult('Gracz ' + playerWins + ' : ' + computerWins + ' Komputer');
});

buttonScissors.addEventListener('click', function(){
  document.getElementById('button-restart').style.display = 'inline';
  document.getElementById('messages').style.display = 'inline';
  document.getElementById('result').style.display = 'inline';
  document.getElementById('game').style.display = 'none';
  buttonClicked('nożyce');
  clearResult();
  printResult('Gracz ' + playerWins + ' : ' + computerWins + ' Komputer');
});

buttonRestart.addEventListener('click', function(){
  document.getElementById('button-restart').style.display = 'none';
  document.getElementById('messages').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  clearMessages();
  clearResult();
  playerWins = 0;
  computerWins = 0;
})