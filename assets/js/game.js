// This function starts the fight
var fight= function(){
    window.alert("Welcome to Robot Gladiators");

// User robot setup

var playerName =  window.prompt("What is your robots name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



// Enemy robot setup

var enemyName =  "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;




var  promptFight = window.prompt("Would you like to Fight or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose")


// if player choses to fight, then  fight
if(promptFight === 'fight' || promptFight === 'FIGHT'){
        //remove enemy's health by subtracting the amount set in the playerAttack varaible.

    // Calculate enemy's new health
    enemyHealth -= playerAttack;

    // Log enemy health results to the console
    console.log(
        playerName    + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
    );

    // check enemy's health
        if(enemyHealth <= 0){
            window.alert(enemyName + "has died");
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Calculate player's new health
        playerHealth -= enemyAttack;

        // Log enemy player's results to the console
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
}
// if player choses skip
else if (promptFight === 'skip' || promptFight === 'SKIP'){
    window.alert(playerName + " has chosen to skip the fight")
    //confirm that player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to quite?")

    //if yes (true), leave fight
    if(confirmSkip){
        window.alert(playerName + " has choosen to skip this fight goodbye!")
    }
    // if no (false), continue to fight
    else{
        fight();
        
    }
}
else {
window.alert("You need to choose a valid option. Try again!")
}
};




// function calls
fight();