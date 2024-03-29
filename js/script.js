function rockPaperScissors(){
  let playerWins = 0,
  computerWins = 0;

  /**
   * Function checking which button was clicked
   */
  function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    const randomNumber = Math.floor(Math.random() * 3 + 1),
    playerMove = argButtonName,
    computerMove = getMoveName(randomNumber);

    console.log('wylosowana liczba to: ' + randomNumber);
    console.log('ruch komputera to: ' + computerMove);

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

    displayResult(playerMove, computerMove);
  }

  const buttonRock = document.getElementById('button-rock'),
  buttonPaper = document.getElementById('button-paper'),
  buttonScissors = document.getElementById('button-scissors'),
  buttonRestart = document.getElementById('button-restart'),
  messages = document.getElementById('messages'),
  result = document.getElementById('result'),
  game = document.getElementById('game');

  /** 
   * Function that show game result (this function is used in buttons event listener)
  */
  function showGameOutput(){
    buttonRestart.style.display = 'inline';
    messages.style.display = 'inline';
    result.style.display = 'inline';
    game.style.display = 'none';
  }
  
  /** 
   * Function that hide game result (this function is used in buttons event listener)
  */
  function hideGameOutput(){
    buttonRestart.style.display = 'none';
    messages.style.display = 'none';
    result.style.display = 'none';
    game.style.display = 'block';
  }

  buttonRock.addEventListener('click', function(){
    showGameOutput();
    buttonClicked('kamień');
    clearResult();
    printResult('Gracz ' + playerWins + ' : ' + computerWins + ' Komputer');
  });
  
  buttonPaper.addEventListener('click', function(){
    showGameOutput();
    buttonClicked('papier');
    clearResult();
    printResult('Gracz ' + playerWins + ' : ' + computerWins + ' Komputer');
  });
  
  buttonScissors.addEventListener('click', function(){
    showGameOutput();
    buttonClicked('nożyce');
    clearResult();
    printResult('Gracz ' + playerWins + ' : ' + computerWins + ' Komputer');
  });
  
  buttonRestart.addEventListener('click', function(){
    hideGameOutput();
    clearMessages();
    clearResult();
    playerWins = 0;
    computerWins = 0;
  })
}

rockPaperScissors();