//Potential words for the Beach Life Hangman game
var words = ["bonfire"]; // "sunset", "boardwalk", "surf", "fish"
var underScore = [];
var wins = 0;
var guessesRemaining = 6;
var rightWord = [];
var wrongWord = [];
var newGame = true;
var bonSound = new Audio('assets/audio/boardwalk.mp3');

//random word is selected

if (newGame) {

var currentWord = words[Math.floor(Math.random() * words.length)];

console.log(currentWord);

//current word is displayed on screen as blanks

var currentWordUnderscore = () => {
    for (var i = 0; i < currentWord.length; i++) {
        underScore.push('-');
    }
    return underScore;
}
console.log(currentWordUnderscore());    

//user picks a letter 

document.addEventListener('keypress', (event) => {
    
    newGame = false;

//determine if letter is in word

if(currentWord.indexOf(event.key) > -1) {

//if in currentWord
    
    rightWord.push(event.key); 
    underScore[currentWord.indexOf(event.key)] = event.key;

    if(underScore.join('') == currentWord) {

//need to push to DOM here for winning game

        wins = wins + 1;
        
        newGame = true;

        document.getElementById("you-win").innerHTML = "<h3 style='font-size: 52px;'>YOU WIN!</h3>";

        if(currentWord == "sunset") {
            document.getElementById('fill-image').src = "assets/images/sunset.jpg";
            document.getElementById('fill-text').innerHTML = "Santa Monica, CA is known as one of the best spots in the world to watch the sunset. Over 6 million people visit the Santa Monica Pier each year where the sunset can be viewed from 130 feet in the air atop the Pacific Ferris Wheel.";
        } 
        else if (currentWord == "bonfire") {
            document.getElementById('fill-image').src = "assets/images/bonfire.jpg";
            document.getElementById('fill-text').innerHTML = "There are only 38 beaches in California that still allow bonfires.  A favorite past-time for many when the sun sets and the temperatures drop, a beach bonfire is second to none.";
            bonSound.play();
        }
        else if (currentWord == "boardwalk") {
            document.getElementById('fill-image').src = "assets/images/boardwalk.jpeg";
            document.getElementById('fill-text').innerHTML = "The Santa Cruz Boardwalk overlooks Montery Bay and is home to the oldest amusement park in California. It features more than 40 rides and attractions, 31 restaurants and an 18-hol mini-golf course.";
        };
    }
    
} else {

//if not in currentWord
    
    wrongWord.push(event.key);
    guessesRemaining = guessesRemaining - 1;

//if guessesRemaining = 0 the user loses

    if(guessesRemaining == 0) {

// //need to push to DOM for losing game
        
        newGame = true;

        document.getElementById('fill-image').src = "assets/images/sadbeach.jpg";
        document.getElementById('fill-text').innerHTML = "<h3 style='font-size:46px; margin-top: 10px;'>Sorry You Lose!<br>Try Again</h3>";
    }
}
}

document.getElementById("current-word").innerHTML = underScore.join(' ');
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
document.getElementById("letters-guessed").innerHTML = wrongWord.join(', ');
document.getElementById("wins").innerHTML = 'Wins: ' + wins;


console.log(underScore, wrongWord, guessesRemaining)

});
