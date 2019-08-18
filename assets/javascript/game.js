console.log("my game.js file is attached!");
//global variables
var wins = 0;
var lose = 0;
var userGuess = "";
var guessesLeft = 10;
var lostGame = "img/Stripped car.jpg";
// object
var carObject = {
  corvette: { name: "corvette", picture: "img/corvette.webp" },
  corolla: { name: "corolla", picture: "img/Toyota_Corolla.jpg" },
  tundra: { name: "tundra", picture: "img/Tundra.png" },
  tacoma: { name: "tacoma", picture: "img/Tacoma.jpg" },
  tahoe: { name: "tahoe", picture: "img/Tahoe.webp" },
  crv: { name: "crv", picture: "img/CRV.webp" },
  van: { name: "dontdoit", picture: "img/dont-even-think-about-it.jpg" }
};

// functions
//the next line of code: adds an _ for each letter in the word being guessed.
for (x = 0; x < carObject.corvette.name.length; x++) {
  console.log("added an underscore");
  document.getElementById(
    "word-goes-here"
  ).innerHTML += `<span id="letter${x}">&nbsp;_&nbsp</span>`;
}
//wrong letters array
var lettersWrong = [];
document.onkeyup = function(event) {
  userGuess = event.key;
  //Alphabet Array
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (lettersWrong.indexOf(userGuess) != -1) {
      console.log("you already guessed that.");
    } else {
      //wrong letter location
      if (carObject.corvette.name.indexOf(userGuess) == -1) {
        console.log(`${userGuess} is not in this word.`);
        lettersWrong.push(userGuess);
        console.log(guessesLeft--);
        if (guessesLeft === 0) {
          !alert("GAME OVER");
          {
            window.location.reload();
          }
        }
        document.getElementById("guesses-text").innerHTML = guessesLeft;
        //putting wrong letters in array
        document.getElementById("lose-text").innerHTML = lettersWrong.join(
          ", "
        );
      } else if (carObject.corvette.name.indexOf(userGuess) >= 0) {
        //the location of the correct letter.
        for (i = 0; i < carObject.corvette.name.length; i++) {
          if (userGuess === carObject.corvette.name[i]) {
            //correct letter in location
            console.log(`correct letter at location ${i}`);
            document.getElementById(`letter${i}`).innerHTML = userGuess;
          } else {
            //these are not the location
          }
        }
      }
    }
  }
};
