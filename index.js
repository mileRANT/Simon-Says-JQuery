// console.log("Test");
var simonSays = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
    var nextNum = Math.floor(Math.random()*4);
    var randomNext = simonSays[nextNum];
    gamePattern.push(randomNext);

    playButton(randomNext);
    // $("#" + randomNext).fadeIn(100).fadeToggle(100).fadeToggle(100);
    // // setTimeOut(function(){
    // //     $("#" + randomNext).classList.remove("pressed");
    // // },100);
    // var audio = new Audio("./sounds/" + randomNext + ".mp3");
    // audio.play();

}

nextSequence();

$(".btn").click(function(){
    var userClicked = $(this).attr("id");
    // console.log(userClicked);
    userClickedPattern.push(userClicked);

    playButton(userClicked);
    // $(this).fadeIn(100).fadeToggle(100).fadeToggle(100);
    // var audio = new Audio("./sounds/" + userClicked + ".mp3");
    // audio.play();
})

function playButton(colorIDButton){
    console.log(colorIDButton);
    $("#" + colorIDButton).fadeIn(100).fadeToggle(100).fadeToggle(100);
    var audio = new Audio("./sounds/" + colorIDButton + ".mp3");
    audio.play();
}
