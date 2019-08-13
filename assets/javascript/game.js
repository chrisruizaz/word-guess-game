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
  document.getElementById("word-goes-here").innerHTML +=
    "<span>&nbsp;_&nbsp</span>";
}

var lettersWrong;
console.log(lettersWrong);

document.onkeyup = function(event) {
  userGuess = event.key;
  for (i = 0; i < carObject.corvette.length; i++) {
    console.log(userGuess);
    if (userGuess === carObject.corvette[i]) {
      wins++;
      console.log(`${userGuess} is in this word!`);
    } else {
      console.log(`${userGuess} youre stupid!`);
      lose++;
      document.getElementById("lose-text").innerHTML =
        "<span>losses=" + lose + "</span>";
    }
  }
};
