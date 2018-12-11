//Global variables
var words = ["surfboard", "wipeout", "barney", "quiver", "break", "hangten"]; 
var currentWord
var underScore = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var rightWord = [];
var wrongWord = [];
var userGuess;
var cowSound = new Audio('assets/audio/Cowabunga.mp3');
var wipeSound = new Audio('assets/audio/Wipeout.mp3');

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

            document.getElementById("you-win").textContent = "COWABUNGA DUDE!";
            cowSound.play();

            if(currentWord == "surfboard") {
                document.getElementById('fill-image').src = "assets/images/surfboard.jpg";
                document.getElementById('fill-text').innerHTML = "The surfboard was invented in ancient Hawaii where they were carved from the wood of local trees.  There have been some major advancements over the years though and currently more than 400,000 boards are manufactured each year.";
            } 
            else if (currentWord == "wipeout") {
                document.getElementById('fill-image').src = "assets/images/wipeout.jpg";
                document.getElementById('fill-text').innerHTML = "A wipeout is when a surfer falls or is knocked off the board.  While underwater, the power of the wave can shake the surfer around which is called being 'rag-dolled'.  In fact, 113 people died in 2017 while surfing.";
            }
            else if (currentWord == "barney") {
                document.getElementById('fill-image').src = "assets/images/barney.jpg";
                document.getElementById('fill-text').innerHTML = "A Barney is a new or untalented surfer, also refered to as a Stu or a kook.  This term can also refer to someone who is ignorant of proper surf etiquette.";
            }
            else if (currentWord == "quiver") {
                document.getElementById('fill-image').src = "assets/images/quiver.jpg";
                document.getElementById('fill-text').innerHTML = "A quiver is a surfer's collection of boards.  Typically consisting of three to six boards a quiver is the surfing equivalent to a golfer's bag of clubs.";
            }
            else if (currentWord == "hangten") {
                document.getElementById('fill-image').src = "assets/images/hangten.jpg";
                document.getElementById('fill-text').innerHTML = "Hang Ten is a surfing manuever in which the surfer positions the board in such a way that they can stand and hang all ten toes over the nose of the board.";
            }
            else if (currentWord == "break") {
                document.getElementById('fill-image').src = "assets/images/break.jpeg";
                document.getElementById('fill-text').innerHTML = "A break occurs when the water swells and 'breaks', turning into waves and white water.";
            }
            else if (currentWord == "hangten") {
                document.getElementById('fill-image').src = "assets/images/hangten.jpeg";
                document.getElementById('fill-text').innerHTML = "A Hang Ten is a surfing maneuverin which the surger positions the surfboard in such a way that they can stand and hang all ten toes over the nose of the board.";
            };

            startGame();
        }   
    
    } else {

        //if not in currentWord
        
        wrongWord.push(userGuess);

        // for (var i = 0; i < wrongWord.length; i++) {
        //     if (wrongWord[i] == userGuess) {
        //         console.log("this has already been chosen")
        //         }
        //         else {

            guessesRemaining = guessesRemaining - 1;

            //if guessesRemaining = 0 the user loses

            if(guessesRemaining == 0) {

                document.getElementById('fill-image').src = "assets/images/shark.jpg";
                document.getElementById('fill-text').innerHTML = "<h3 style='font-size:46px; margin-top: 10px; line-height: 150%;'>Wipeout!!<br>Try Again</h3>";
                document.getElementById("you-win").textContent = "";
                wipeSound.play();

                losses = losses + 1;

                document.getElementById('fill-image').src = "assets/images/shark.jpg";
                document.getElementById('fill-text').innerHTML = "<h3 style='font-size:46px; margin-top: 10px; line-height: 150%;'>Wipeout!!<br>Try Again</h3>";
                document.getElementById("you-win").textContent = "";
                wipeSound.play();

                startGame();
                }
                }
        // }
    // }
    
document.getElementById("current-word").innerHTML = underScore.join(' ');
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
document.getElementById("letters-guessed").innerHTML = wrongWord.join(', ');
document.getElementById("wins").innerHTML = 'Wins: ' + wins;
document.getElementById("losses").innerHTML = 'Losses: ' + losses;

};

startGame();
