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
var cowSound = new Audio('assets/audio/cowabunga.mp3');
var wipeSound = new Audio('assets/audio/wipeout.mp3');

//Start game

function startGame() {

    //Reset for when new game starts

    wrongWord = [];
    rightWord = [];
    underScore = [];
    guessesRemaining = 9;
    document.getElementById("you-win").innerHTML = "";
    
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
            cowSound.play();

            if(currentWord == "surfboard") {
                document.getElementById('fill-image').src = "assets/images/surfboard.jpg";
                document.getElementById('fill-text').innerHTML = "The surfboard was invented in ancient Hawaii where they were carved from the wood of local trees.  There have been some major advancements over the years though and currently more than 400,000 boards are manufactured each year.";
            } 
            else if (currentWord == "wipeout") {
                document.getElementById('fill-image').src = "assets/images/wipeout.jpg";
                document.getElementById('fill-text').innerHTML = "A wipeout is when a surfer falls or is knocked off the board.  While underwater, the power of the wave can shake the surfer around which is called being Rag-dolled.  In fact 113 people died in 2017 while surfing.";
            }
            else if (currentWord == "barney") {
                document.getElementById('fill-image').src = "assets/images/barney.jpg";
                document.getElementById('fill-text').innerHTML = "A Barney is a new or untalented surfer, also refered to as a Stu or a kook.  This term can also refer to someone who is ignorant of proper surf etiquette.";
            }
            else if (currentWord == "quiver") {
                document.getElementById('fill-image').src = "assets/images/quiver.jpg";
                document.getElementById('fill-text').innerHTML = "A quiver is a surfer's collection of boards.  Typically consisting of three to six boards a quiver is the surfing equivalent to a golfer's bag of clubs.";
            }
            else if (currentWord == "break") {
                document.getElementById('fill-image').src = "assets/images/break.jpeg";
                document.getElementById('fill-text').innerHTML = "A break occurs when the water swells and 'breaks', turning into waves and white water.";
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

            document.getElementById('fill-image').src = "assets/images/shark.jpg";
            document.getElementById('fill-text').innerHTML = "<h3 style='font-size:46px; margin-top: 10px;'>Wipeout!!<br>Try Again</h3>";
            wipeSound.play();

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