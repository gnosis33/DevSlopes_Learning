var readline = require('readline-sync');
var areYouSure = false;
var otherHobby = 0;

function getHobbyCount() {
    otherHobby = readline.questionInt("How many other hobbies do you have?: ");
    return otherHobby;
}

function addHobbies(numHobbies) {
    var count = 0;
    while (count < numHobbies) {
        var input = readline.prompt();
        hobbies.push(input)
        count++;

        if (count < numHobbies) {
            console.log("-- Awesome! " + input + " is cool! What\'s the other " + (numHobbies - count) + " hobbies you have? --")
        } else {
            console.log("I wish I could " + hobbies + "...but I'm just a computer.")
        }
    }
}

// prompt name question
var userName = readline.question("What's your name? ");
//prompt favorite hobby question
var userHobby = readline.question("What's your favorite hobby? ");
// ask if there are any other hobbies
//var otherHobby = readline.questionInt("How many other hobbies do you have?: ");
//add hobbies to list
var hobbies = [userHobby];
// store list of users hobbies
// if there are other hobbies, add them to the list
getHobbyCount();

if (otherHobby > 0) {
    addHobbies(otherHobby);
} else {
    var areYouSure = readline.keyInYN("You only have one hobby? Are you sure?" + hobbies[0] + " is your only hobby?");

}

if (!areYouSure && hobbies.length <= 1) {
    //add hobbies
    console.log("what are they?");
    addHobbies(getHobbyCount());
} else if (areYouSure) {
    console.log(hobbies + " is cool, good for you!")
}
// print list of user hobbies at the end
console.log(userName +", welcome to the game!");
console.log("Your hobbies are: " + hobbies);




