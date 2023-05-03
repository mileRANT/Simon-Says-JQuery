// console.log("Test");
var simonSays = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameInProgress = false;

function nextSequence(){
    var nextNum = Math.floor(Math.random()*4);
    var randomNext = simonSays[nextNum];
    gamePattern.push(randomNext);

    playButton(randomNext);
    $("#" + randomNext).fadeIn(100).fadeToggle(100).fadeToggle(100);
    // // setTimeOut(function(){
    // //     $("#" + randomNext).classList.remove("pressed");
    // // },100);
    // var audio = new Audio("./sounds/" + randomNext + ".mp3");
    // audio.play();

}

// nextSequence();

$(".btn").click(function(){
    var userClicked = $(this).attr("id");
    // console.log(userClicked);
    userClickedPattern.push(userClicked);

    playButton(userClicked);
    userClickAnimate(userClicked);


})

function playButton(colorIDButton){
    console.log(colorIDButton);
    // $("#" + colorIDButton).fadeIn(100).fadeToggle(100).fadeToggle(100);
    var audio = new Audio("./sounds/" + colorIDButton + ".mp3");
    audio.play();
}

function userClickAnimate(colorID){
    $("#" + colorID).addClass("pressed");
    setTimeout(function(){
        $("#" + colorID).removeClass("pressed");
    },100);
}

$(document).keypress(function(KeyBoardEvent){
    if (gameInProgress != true){
        gameInProgress = true;
        simonSaysStartGame();
    }
    
})

function simonSaysStartGame(){
    while (gameInProgress){
        $("#level-title").text("Level: " + (gamePattern.length+1 ));
        nextSequence();
        gameInProgress = false;
    }

    if (!gameInProgress){
        $("#level-title").text("Game Over");
        setTimeout(function(){
            $("#level-title").text("Highest level: " + (gamePattern.length+1 ));
        }, 1000);
        setTimeout(function(){
            $("#level-title").text("Press A Key to Start");
        }, 5000);
        
        gamePattern = [];
        
    }
}