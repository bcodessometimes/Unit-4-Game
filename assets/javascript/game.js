//Establish Global Variables
// var imageArray = ["arrayImageOne", "arrayImageTwo", "arrayImageThree", "arrayImageFour"];
var wins = 0;
var losses = 0;
var computerRandom;
var imageOneRandom;
var imageTwoRandom;
var imageThreeRandom;
var imageFourRandom;
var imageOne =0;
var guessTally =0;

//Set New Game / Random Numbers
function newGame () {
    imageOneRandom = (Math.floor (Math.random() * ((12 - 1) + 1)) + 1);
    imageTwoRandom = (Math.floor (Math.random() * ((12 - 1) + 1)) + 1);
    imageThreeRandom = (Math.floor (Math.random() * ((12 - 1) + 1)) + 1);
    imageFourRandom = (Math.floor (Math.random() * ((12 - 1) + 1)) + 1);
    computerRandom = (Math.floor (Math.random() * ((120 - 19) + 1)) + 19);
    guessTally = 0;
    $(".compGuessNum").text(computerRandom);
    $(".playGuessNum").text(guessTally);
}

$("#htmlWinNum").text(wins);
$("#htmlLossNum").text(losses);

function winner () {
    wins++;
    alert("You Win!");
    newGame();
    $("#htmlWinNum").text(wins);
    
}

function loser () {
    losses++;
    alert("You Loose!");
    newGame();
    $("#htmlLossNum").text(losses);
}


$(".imgOne").on("click", function() {
    guessTally = guessTally + imageOneRandom;
    $(".playGuessNum").text(guessTally);

    if (guessTally === computerRandom)
    {
        winner();
    } else if (guessTally > computerRandom)
    {
        loser();
    }

});
$(".imgTwo").on("click", function() {
    guessTally = guessTally + imageTwoRandom;
    $(".playGuessNum").text(guessTally);

    if (guessTally === computerRandom)
    {
        winner();
    } else if (guessTally > computerRandom)
    {
        loser();
    }

});
$(".imgThree").on("click", function() {
    guessTally = guessTally + imageThreeRandom;
    
    $(".playGuessNum").text(guessTally);
    if (guessTally === computerRandom)
    {
        winner();
    } else if (guessTally > computerRandom)
    {
        loser();
    }

});
$(".imgFour").on("click", function() {
    guessTally = guessTally + imageFourRandom;
    
    $(".playGuessNum").text(guessTally);
    if (guessTally === computerRandom)
    {
        winner();
    } else if (guessTally > computerRandom)
    {
        loser();
    
    }

});

//Print to HTML


//Call Functions
 newGame();