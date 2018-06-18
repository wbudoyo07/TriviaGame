// alert("yeah its work");
// // Variables
var startGame;
// arrays that hold questions, answer option and the correct answer
var questionsAndAnswer =[
    {
        questions: "Who Won 2018 SuperBowl ? ",
        answerOptions: ["CowBoys" , "Patriot", "Eagles", "Brown"],
        CorrectAnswer : "Eagles",
        gif: "assets/gif/eagles.gif" },

    {
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

// to keep track the number of the next questions. start from 0 because we start the array from index 0
var currentQuestion= 0 ;

$(document).ready(function() {



//==========================================================================================================
//Function


 // function that create render the question and the options answers
    function initilizeQuestions(){
        timer = setInterval(timerCountDown,1000);
        
        
        // dislay the eustion
        var triviaQuestions = questionsAndAnswer[currentQuestion].questions;
        $(".questions").html(triviaQuestions);
        
        // since current questions is 0 is gotta get the index 0 first
        for(i=0; i<questionsAndAnswer[currentQuestion].answerOptions.length; i++){
            
            $(".answerClass").append('<button id = "answer-btn">'
            + questionsAndAnswer[currentQuestion].answerOptions[i]+'</button>' );
            
        }

       
        
        console.log("test");
    }

    //function for timer that count down 30 sec

    function decrementTime(){
        // decrement the 30 seconds
        timerCountDown--;

        $(".timer").html(timerCountDown);
    }// end timer()

    //  intitiliaze the next questions
    function nextQuestion(){

        $(".answers").remove();
        // // reset back to 30 seconds
        // timerCountDown=30;
        
        // decrementTime();
        // update the current question  so its gotta load the array [1],[2],[3] etc
        currentQuestion++;

        // call initilizeQuestions () to get  the next questions
        initilizeQuestions();
    }

    
//==========================================================================================================
//Main Process



// click event to Start the GAME
$("body").on("click", "#start-btn", function(){

    console.log("you click me");
    console.log()
    // remove the start button
    $("#start-btn").remove();
    // call the  function question and answer
    decrementTime();
    initilizeQuestions();
    

})// end click event start button;

// click event  to compare the answers option with the correct answer 
$(document).on("click", "#answer-btn", function(){
    

    var selectedAnswer =$(this).text();
    console.log(selectedAnswer);


    if(selectedAnswer === questionsAndAnswer[0].CorrectAnswer){
        
        console.log("you win, you pick the right answer");
        
        nextQuestion();
        //update win counter for result
        winCounter++;

    }else{

        
        console.log("you  picked the wrong answer");
        
        nextQuestion();
        // update lose counter for result
        lossCounter++;
    }
    

   

})// end click event start button;
    


});// end jquary