// console.log("Test");
var simonSays = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameInProgress = false;

function nextSequence(){
    userClickedPattern = []; //clear user answer with every new stage
    var nextNum = Math.floor(Math.random()*4);
    var randomNext = simonSays[nextNum];
    gamePattern.push(randomNext);
    console.log("Level " + gamePattern.length + " Answer: " + gamePattern);
    $("#level-title").text("Level: " + (gamePattern.length));
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
    
    if (gameInProgress){
        checkAnswer(userClickedPattern.length-1);
    }
    
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
    // while (gameInProgress){
    gamePattern = [];       //starting the game = reset the game
    nextSequence();
    //     gameInProgress = false;

    // }

    // if (!gameInProgress){
    //     $("#level-title").text("Game Over");
    //     $("body").addClass("game-over");
    //     var audio = new Audio("./sounds/wrong.mp3");
    //     audio.play();

    //     setTimeout(function(){
    //         $("#level-title").text("Highest level: " + (gamePattern.length+1 ));
    //     }, 1000);
    //     setTimeout(function(){
    //         $("#level-title").text("Press A Key to Start");
    //         $("body").removeClass("game-over");
    //     }, 5000);
        
    //     gamePattern = [];
        
    // }
}

function checkAnswer(currentSequence){
    //note that currentlevel here is actually current level - 1 to adjust to the array
    if (userClickedPattern[currentSequence] === gamePattern[currentSequence]){
        console.log("Success");
        if (userClickedPattern.length === gamePattern.length){
            $("body").addClass("correct");
            setTimeout(function(){
                $("body").removeClass("correct");
            }, 100);
            setTimeout(function () {
                nextSequence();
            }, 1000);
          }
    } else {
        console.log("Fail");
        $("#level-title").text("Game Over");
        $("body").addClass("game-over");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();

        setTimeout(function(){
            $("#level-title").text("Highest level: " + (gamePattern.length ));
        }, 1000);
        setTimeout(function(){
            $("#level-title").text("Press A Key to Start");
            $("body").removeClass("game-over");
        }, 3000);
        
        // gamePattern = [];

        gameInProgress = false;
    }
    console.log(userClickedPattern);
}