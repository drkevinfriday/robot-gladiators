// var playerName = 'Clank McKrank' change;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = ["Roborto","Amy Android", "Robo Trumble",]
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function(enemyName) {
    while(enemyHealth >0 && playerHealth >0 ){
    

  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to fight, fight
  if (promptFight === "skip" || promptFight === "SKIP") 
  {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney,", playerMoney);
      break;
    }
}  
  
// remove enemy's health by subtracting the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player moeny for winning
      playerMoney +=20;
      //leave whle() loop since  enemey is dead
      break;
    } 
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
            //leave whle() loop since player is dead
            } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    }
}




// run fight function to start game
//startGame Function
var startGame = function ()
{
    //reset player stats
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10

    for(var i  =0; i < enemyName.length; i++) 
    {
        if(playerHealth > 0)
        {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
        // updates the enemy name from  the enemy array
        var pickedEnemyName = enemyName[i];

        // reset enemey heatlh to 50 for each new fighter
        enemyHealth = 50;

        // use the debugger to pause script from running and check what's going on at that moment n the code
        // debugger; 

        // calls the fight function on currently  fighter in the for loop
        fight(pickedEnemyName);
        }
     
    }
    endGame();
    
};

// end game function
var endGame = function(){
    if (playerHealth > 0){
        window.alert('Great job you survived the game! You now have a score' );
    }
    else {
        window.alert("You've lost your robot in battle");
    }


//  Ask the player if they want to play the game again

    
    var playAgainConfirm = window.confirm("Would you like to try again")
    // test confirm window
    if(playAgainConfirm)
    {
        startGame();
    }
    else 
    {
        window.alert("Thanks for playing Robot Gladiators see you next battle!")
    }

}

startGame();


// wrap the game logic in a startGame() function

// when  the player wins run a end game  function
    // alert player  of total stats 
    // ask the player if he wants to play again 
    // if yes run the startGame ()

// Afrer the player skips or defeats an enemny

//      ask player if ther want to shop
//      if yes call the shop() function

//          in the shop() function ask player f they want to "refil" health, "upgrade" attack or "leave" the shop

//          if upgrade subtract money points from player and increase health

//              if leave, alert  goodbye and exit the function

//              if any other invalid  option, call shop() again
