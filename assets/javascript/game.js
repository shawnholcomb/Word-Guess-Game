//Potential words for the Beach Life Hangman game
var wordChoice = ["sunshine", "surfboard", "bikini"]
var wins = 0;
var guessesRemaining = 6;

//user presses a key, random word from wordChoice array is selected and displayed on screen as blanks, number of choices is reset to 7, image in left column is reset
var userPress = document.onKeyUp(event.key)
var wordToGuess = wordChoice[Math.floor(Math.randon()*wordChoice.length)];


//user picks a letter, letter is displayed on screen, 



//if letter is in word, letter is revealed, if letter is not in word it is added to the letters already guessed and # of guess is reduced by one
var guesseRemainingElement = document.getElementById("wins");
guesseRemainingElement = guessesRemaining;



//if # of guess left = 0, "You Lose, try again" and restart




//if all letters are revealed "You win" and new image with info blurb is displayed in left column and restart


