
 var fight= function(){
    window.alert("Welcome to Robot Gladiators");
};

// User robot setup

var playerName =  window.prompt("What is your robots name?")
var playerHealth = 100;
var playerAttack = 10;



// Enemy robot setup

var enemyName =  "Roborto"
var enemyHealth = 10;
var enemyAttack = 12;

// This function starts the fight


// Calculate player's new health
playerHealth -= enemyAttack;

// Log enemy player's results to the console
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
);
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


// function calls
fight();