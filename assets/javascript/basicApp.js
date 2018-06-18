// alert("yeah works");

// VARIABLES
var seconds =10;
var intervalId;
// counter to track win and lose
var winCounter = 0;
var lossCounter =0;

// this counter to track the index for the next question
var currentQuestions =0;

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

    },

    {
        questions: "Who is no 1 pick NBA draft 2016 ? ",
        answerOptions: ["Ben Simmons" , "Lonzo Ball", "Joel Embiid", "Lebron James"],
        CorrectAnswer : "Ben Simmons",
        gif: "",

    },
    
    {
        questions: "What draft pick was Stephen Curry ? ",
        answerOptions: ["1" , "3", "5", "7"],
        CorrectAnswer : "7",
        gif: "",

    },

    {
        questions: "How many championships have Spurs won ? ",
        answerOptions: ["1" , "3", "5", "7"],
        CorrectAnswer : "5",
        gif: "",

    },

    {
        questions: "Who has Most Triple-Doubles In A Single Season? ",
        answerOptions: ["Lebron James" , "Michael Jordan", "Russel WestBrook", "Stephen Curry"],
        CorrectAnswer : "Russel WestBrook",
        gif: "",

    }
    

];
//=====================================================================================================
// FUNCTION


// jquary load 
$(document).ready(function() {


function initilizieQuestions(){

    // intiliziing the question ind the array
    for (i=0; i<questionsAndAnswer.length; i++){
        $(".questions").append('<h1>'+questionsAndAnswer[i].questions+'</h1>');

        // intilizing the answerOptions 
        for(j=0; j<questionsAndAnswer[i].answerOptions.length; j++){
            $(".questions").append("<input type='radio' name='question-"+i+"' value=' "+ questionsAndAnswer[i].answerOptions[j]+"' >" +
        questionsAndAnswer[i].answerOptions[j] +"</input>");
            
        }// end loop answer
    }

}; // end initilizieQuestions()

function run() {
   
    intervalId = setInterval(decrement, 1000);
  }

// function for decrementing the time 30 to 0
function decrement(){

    //decrement second
    seconds--;

   // the show the number on the page
    $(".timer").html("<h1>"+seconds+"</h1>")

    // when the  second hit zero..
    if(seconds === 0 ){

        // stop the time
        clearInterval(intervalId);

        // print out result
       
        result();
    
        console.log($('input[name="question-0"]:checked').val())
        
    }
}

//  comparing the answer if the user's answer is correct or not
function compareAnswer(){

 var getName = document.getElementsByName("questions-0")



    
    

         
  

}// end compareAnswer function

// all the user result
function result(){
    
    $(".timer ").remove();
     $(".questions ").remove();
    
     $("#result").html("result: </br>");
     $("#result").append("You correct:"+ winCounter +"</br>");
     $("#result").append("You wrong:"+ lossCounter+"</br>");
}

//=======================================================================================================
// Main Process



   
    $(document).on('click', '#start-btn', function(){
        $("#start-btn").remove();
        $(".timer").html('<h1>30</h1>');
        run();
        initilizieQuestions();
        compareAnswer();
        
       
    })
    //



});// end jquary
