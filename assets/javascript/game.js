console.log("my game.js file is attached!");
//global variables
var wins = 0;
var lose = 0;
var userGuess = "";

// object
var carObject = {
  corvette: "corvette",
  corolla: "corolla",
  tundra: "tundra",
  tacoma: "tacoma",
  tahoe: "tahoe",
  crv: "crv",
  van: "dontdoit"
};

// functions
//the next line of code: adds an _ for each letter in the word being guessed.
for (x = 0; x < carObject.corvette.length; x++) {
  console.log("added an underscore");
  document.getElementById(
    "word-goes-here"
  ).innerHTML += `<span id="letter${x}">&nbsp;_&nbsp</span>`;
}

var lettersWrong;

document.onkeyup = function(event) {
  userGuess = event.key;

  //wrong letter
  if (carObject.corvette.indexOf(userGuess) == -1) {
    console.log(`${userGuess} is not in this word.`);
    document.getElementById("lose-text").innerHTML += userGuess;
  } else if (carObject.corvette.indexOf(userGuess) >= 0) {
    //the location of the correct letter.
    for (i = 0; i < carObject.corvette.length; i++) {
      if (userGuess === carObject.corvette[i]) {
        //correct letter in location
        console.log(`correct letter at location ${i}`);
        document.getElementById(`letter${i}`).innerHTML = userGuess;
      } else {
        //these are not the location
      }
    }
  }
};
