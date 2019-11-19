function getDamage() {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  function startCombat(playerName) {
    let playerHP = 40;
    let grantHP = 10;
    let numberOfWins = 0;
    let winnerName;
    let quitGame;
    
    while (playerHP > 0 && numberOfWins < 3) {
      quitGame = prompt("Do you want to ATTACK or QUIT?");
  
      if (quitGame.toUpperCase() === "QUIT") {
        break;
      } else if (quitGame.toUpperCase() === "ATTACK") {
        playerHP -= getDamage();
        grantHP -= getDamage();
  
        console.log(`${playerName}'s remaining HP is ${playerHP} and Grant's remaining HP is ${grantHP}!`);
  
        if (grantHP <= 0) {
          numberOfWins++;
          grantHP = 10;
          console.log(`Grant has been defeated! Player wins: ${numberOfWins}`);
        }
      }
    }
  
    if (playerHP > 0 && numberOfWins === 3) {
      console.log(`${playerName} wins!`);
    } else if (playerHP <= 0) {
      console.log("Grant wins!");
    }
  }
  
  function startGame() {
    let newGame = confirm("Do you want to play?");
    let name = prompt("What's your name?");
    if (newGame) {
      startCombat(name);
    }
  }
  
  startGame();