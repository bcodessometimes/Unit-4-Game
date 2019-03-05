//establish global variables

var imageArray = [
    "../images/35766-200.png",
    "../images/QMark.jpg",
    "../images/Question_Mark2.png",
    "../images/question-mark.jpg"
];

var wins = 0;
var losses = 0;
var computerRandom;
var imageOneRandom;
var imageTwoRandom;
var imageThreeRandom;
var imageFourRandom;
var imageOne =0;
var guessTally =0;

//generate random number 19-120
var computerRandom = (Math.floor (Math.random() * ((120 - 19) + 1)) + 19);
// console.log(computerRandom);
//assign random number values to images 1-12 
//there is probably a more DRY way to do this but im just gonna get it working
var imageOneRandom = (Math.floor (Math.random() * ((12 - 1) + 1)) + 1);
$(imageOne).append(imageOneRandom);
// console.log(imageOneRandom);
var imageTwoRandom = (Math.floor (Math.random() * ((12 - 1) + 1)) + 1);
// console.log(imageTwoRandom);
var imageThreeRandom = (Math.floor (Math.random() * ((12 - 1) + 1)) + 1);
// console.log(imageThreeRandom);
var imageFourRandom = (Math.floor (Math.random() * ((12 - 1) + 1)) + 1);
// console.log(imageFourRandom);
//put images on page
//click event for images

$(".imgOne").on("click", function() {
    console.log(imageOne);
    guessTally + imageOne;
    alert("working");
    console.log(guessTally);
});
$(".imgTwo").on("click", function() {
    alert("working");
});
$(".imgThree").on("click", function() {
    alert("working");
});
$(".imgFour").on("click", function() {
    alert("working");
});
//on click add number to guess
//if/else for win == computer guess and loss if greater
if (guessTally === computerRandom) {
    guessTally == 0;
    wins++
    alert("You Win!");
    //something about picking new numbers
}
if (guessTally > computerRandom) {
    guessTally == 0;
    losses++
    alert("You Lost!");
    //something about picking new numbers
}
// win ++ for win and Loss -- for loss
//resets changes all numbers
//copy values to html