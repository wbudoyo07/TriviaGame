// alert("yeah its work");
// // Variables
var startGame;
// arrays that hold questions, answer option and the correct answer
var questionsArray = ["What sports Michael Jordan played ?"];
var answersOptionArray = ["Baseball Player ","BasketBall Player","Soccer Player","Chef"];
var correctAnswer = ["BasketBall Player"];

$(document).ready(function() {



//==========================================================================================================
//Function

    // function  that will create a start button to start
    function initializeStart(){
        
        var startBtn= $("<button id= 'start-btn'>start</button>");
        // startBtn = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        

        $("#mainArea").html(startBtn);
    }

 // function that create render the question and the options answers
    function initilizeTriviaGame(){

        var triviaQuestions = "<div id=questionsID>"+questionsArray[0];
        $("#mainArea").html(triviaQuestions);
        var triviaAnswer = "<div class =answerClass>";
        for(i=0; i<answersOptionArray.length; i++){
            
            $("#questionsID").append(triviaAnswer + answersOptionArray[i]);
        }
        
        
        console.log("test");
    }
    
//==========================================================================================================
//Main Process
initializeStart();



$("body").on("click", "#start-btn", function(event){

    console.log("you click me");

    // call the  function question and answer
    initilizeTriviaGame();

})// end click event start button;

// click event when you click answer options 
$("body").on("click", ".answerClass", function(event){

    console.log(this);

   

})// end click event start button;
    


});// end jquary