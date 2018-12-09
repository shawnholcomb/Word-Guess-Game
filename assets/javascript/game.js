//Potential words for the Beach Life Hangman game
var wordChoice = ["bonfire", "sunset", "boardwalk"];
var wins = 0;
var guessesRemaining = 6;
var indexOfCurrentWord;
var currentWord = [];
var guessedLetters = [];


//user presses a key, random word from wordChoice array is selected and displayed on screen as blanks, number of choices is reset to 7, image in left column is reset
function startGame () {
    
    document.onKeyUp = function (event) {
        var userPress = event.key;   
        guessesRemaining = 6;
        console.log(userPress);
    }


}



// var wordToGuess = wordChoice[Math.floor(Math.randon()*wordChoice.length)];

//user picks as letter 



//if letter is in word, letter is revealed, if letter is not in word it is added to the letters already guessed and # of guess is reduced by one

// var guesseRemainingElement = document.getElementById("wins");
// guesseRemainingElement = guessesRemaining;



//if # of guess left = 0, "You Lose, try again" and restart




//if all letters are revealed "You win" and new image with info blurb is displayed in left column and restart


