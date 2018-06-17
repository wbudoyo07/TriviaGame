// alert("yeah its work");
// // Variables
var startGame;
// arrays that hold questions, answer option and the correct answer
var questionsAndAnswer =[
    {
        questions: "Who Won 2018 SuperBowl ? ",
        answerOptions: ["CowBoys" , "Patriot", "Eagles", "Brown"],
        CorrectAnswer : "Eagles",
        gif: "assets/gif/eagles.gif",

        questions: "Who Won 2018 Nba Final ? ",
        answerOptions: ["Cavalier" , "Sixers", "Lakers", "Warrior"],
        CorrectAnswer : "Warrior",
        gif: "assets/gif/warrior.gif",

    }
];

//counter
var winCounter=0;
var lossCounter=0;
var timerCountDown= 30;

$(document).ready(function() {



//==========================================================================================================
//Function


 // function that create render the question and the options answers
    function initilizeQuestions(){
        timer = setInterval(timerCountDown,1000);
        var triviaQuestions = questionsAndAnswer[0].questions;

        $(".questions").html(triviaQuestions);
        // var triviaAnswer = "<div class =answerClass>";
        // for(i=0; i<answersOptionArray.length; i++){
            
        //     $("#questionsID").append(triviaAnswer + answersOptionArray[i]);
        // }
        
        
        console.log("test");
    }

    //function for timer that count down 30 sec

    function timer(){
        // decrement the 30 seconds
        timerCountDown--;

        $(".timer").html(timerCountDown);
    }// end timer()
    
//==========================================================================================================
//Main Process




$("body").on("click", "#start-btn", function(event){

    console.log("you click me");
    console.log()
    // remove the start button
    $("#start-btn").remove();
    // call the  function question and answer
    timer()
    initilizeQuestions();

})// end click event start button;

// click event when you click answer options 
$("body").on("click", ".answerClass", function(event){
    var selectedAnswer =$(this).text();
    console.log(selectedAnswer);

    if(selectedAnswer === "Chef"){
        alert("you win");

    }else{
        alert("you lose");
    }
    

   

})// end click event start button;
    


});// end jquary