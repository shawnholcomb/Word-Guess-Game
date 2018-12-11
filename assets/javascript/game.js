//Global variables
var words = ["surfboard", "wipeout", "barney", "quiver", "break"]; 
var currentWord
var underScore = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var rightWord = [];
var wrongWord = [];
var userGuess;
var bonSound = new Audio('assets/audio/boardwalk.mp3');

//Start game

function startGame() {

    //Reset for when new game starts

    wrongWord = [];
    rightWord = [];
    underScore = [];
    guessesRemaining = 9;
    
    //random word is selected

    currentWord = words[Math.floor(Math.random() * words.length)];

    //current word is displayed on screen as blanks

    for (var i = 0; i < currentWord.length; i++) {
            underScore.push('-');
    }
}  

//User picks a letter 

document.onkeyup = function(event) {
    userGuess = event.key;

    // //determine if letter is in word

    if (currentWord.indexOf(userGuess) > -1) {

        //if in currentWord
        
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === userGuess) {
                underScore[i] = userGuess;
            }
        };

        if(underScore.join('') == currentWord) {
        
        //need to push to DOM here for winning game

            wins = wins + 1;

            document.getElementById("you-win").innerHTML = "<h3 style='font-size: 52px;'>COWABUNGA DUDE!</h3>";

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

            startGame();
        }   
    
    } else {

        //if not in currentWord
        
        wrongWord.push(userGuess);
        guessesRemaining = guessesRemaining - 1;

        //if guessesRemaining = 0 the user loses

        if(guessesRemaining == 0) {

            losses = losses + 1;

            document.getElementById('fill-image').src = "assets/images/sadbeach.jpg";
            document.getElementById('fill-text').innerHTML = "<h3 style='font-size:46px; margin-top: 10px;'>Wipeout!!<br>Try Again</h3>";

            startGame();
        }
    }

document.getElementById("current-word").innerHTML = underScore.join(' ');
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
document.getElementById("letters-guessed").innerHTML = wrongWord.join(', ');
document.getElementById("wins").innerHTML = 'Wins: ' + wins;
document.getElementById("losses").innerHTML = 'Losses: ' + losses;

};

startGame();