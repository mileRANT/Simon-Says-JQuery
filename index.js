// console.log("Test");
var simonSays = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
    var nextNum = Math.floor(Math.random()*4);
    var randomNext = simonSays[nextNum];
    gamePattern.push(randomNext);

    $("#" + randomNext).fadeIn(100).fadeToggle(100).fadeToggle(100);
    // setTimeOut(function(){
    //     $("#" + randomNext).classList.remove("pressed");
    // },100);
    var audio = new Audio("./sounds/" + randomNext + ".mp3");
    audio.play();

}

nextSequence();

$("button").click(function(){
    console.log(this.id)
})
