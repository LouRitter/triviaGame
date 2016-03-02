//---------------------Global Variables-----------------------------
var right=0
var wrong=0
var questionNum='' ;
var question0={
    question:'What was the number one beer sold in the United States before Prohibition?',
    answers:['Budweiser','Guinness','Coors','Becks'],
}
var question1={
    question:'Approximately how many people are drunk right now?',
    answers:['50 million','10 million','200,000','Just Me'],
}
var question2={
    question:'Cenosillicaphobia is the fear of what?',
    answers:['A bad beer','An empty beer glass','Falling pianos','Blacking out'],
}
var question3={
    question:'When was beer first thought to be consumed?',
    answers:['1487','2AD','1000BC','9500BC'],
}
var question4={
    question:'What was the length of prohibition?',
    answers:['approx. 23 years','approx. 14 years','approx. 7 years','18 days'],
}
var question5={
    question:'Who said the quote "Good people drink good beer"?',
    answers:['Hunter S. Thompson','Franklin D. Roosevelt','Homer Simpson','Stone Cold Steve Austin'],
}
var question6={
    question:'In what Pennsylvania town is Yuengling brewed',
    answers:['Pottsville','Philadelphia','Drinkston','East Hillward'],
}
var question7={
    question:'Which state, per capita, has the most breweries',
    answers:['Colorado','California','Vermont','New Jersey'],
}
var question8={
    question:'What is the most popular style of beer in the U.S.A',
    answers:['stout','pilsner','I.P.A.','lager'],
}
var question9={
    question:'What is the average calorie count of a pumpkin beer?',
    answers:['140 calories','240 calories','300 calories','150 calories'],
}
var question10={
    question:'Who was the first president to brew beer in the White House?',
    answers:['Ronald Reagan','Andrew Jackson','George Washington','Barack Obama'],
}
var rightWrong=false;

//------------------------------------------------------------------

//----------------------Functions-----------------------------------
function checkGame(){
        
    if (rightWrong===true) {
        right++;
        alert("correct")
        $(".questionPage").hide();
        $(".breakPage").show();
        $("#right").html(right);
        $("#wrong").html(wrong);
        $("#amountright").html(right);
        $("#amountwrong").html(wrong);
        
    }else{
        alert("wrong");
        wrong++
        $(".questionPage").hide();
        $(".breakPage").show();
        $("#right").html(right);
        $("#wrong").html(wrong);
        $("#amountright").html(right);
        $("#amountwrong").html(wrong);
    }


};
var timer = 20;
    function countdown(){
      counter = setInterval(increment, 1000);
    }
    function increment(){
      var timer = timer - 1;
      $("#timer").html(timer);
      if (timer === 0){
        stop();
        alert('Time Up!')
        wrong++;
      }
    }

    function stop(){
      clearInterval(counter);
    }

// function countdown() {
//     var timer = 90, seconds;
//     setInterval(function () {
//         seconds = parseInt(timer % 60, 10);
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         $("#timer").html(timer);

//         if (--timer === -1) {
//             alert("Times Up!");
//         }
//     }, 1000);
// function stopFunction() {
//     clearInterval(timer);
// };

// };



 

//-----------------------------------------------------------------------

//------------------------------Calls------------------------------------

$(".breakPage").hide();
$(".endPage").hide();
$(".questionPage").hide();
$("#questionButton2").hide();
$("#questionButton3").hide();
$("#questionButton4").hide();
$("#questionButton5").hide();
$("#questionButton6").hide();
$("#questionButton7").hide();
$("#questionButton8").hide();
$("#questionButton9").hide();
$("#questionButton10").hide();
$("#endButton").hide();


$("#nextButton").click(function(){
    questionNum=0;
    $(".start").hide();
    $("#question").html(question0.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question0.answers[x]);
};
    $(".questionPage").show();
    countdown();
});
$("#questionButton1").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=1;
    $("#question").html(question1.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question1.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton1").hide();
    $("#questionButton2").show();
    countdown()
});
$("#questionButton2").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=2;
    $("#question").html(question2.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question2.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton2").hide();
    $("#questionButton3").show();
    countdown();
});
$("#questionButton3").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=3;
    $("#question").html(question3.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question3.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton3").hide();
    $("#questionButton4").show();
    countdown();
});
$("#questionButton4").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=4;
    $("#question").html(question4.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question4.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton4").hide();
    $("#questionButton5").show();
    countdown();
});
$("#questionButton5").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=5;
    $("#question").html(question5.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question5.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton5").hide();
    $("#questionButton6").show();
    countdown();
});
$("#questionButton6").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=6;
    $("#question").html(question6.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question6.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton6").hide();
    $("#questionButton7").show();
    countdown();
});
$("#questionButton7").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=7;
    $("#question").html(question7.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question7.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton7").hide();
    $("#questionButton8").show();
    countdown();
});
$("#questionButton8").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=8;
    $("#question").html(question8.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question8.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton8").hide();
    $("#questionButton9").show();
    countdown();
});
$("#questionButton9").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=9;
    $("#question").html(question9.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question9.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton9").hide();
    $("#questionButton10").show();
    countdown();
});
$("#questionButton10").click(function(){
    $(".breakPage").hide();
    rightWrong=false;
    questionNum=10;
    $("#question").html(question10.question);
    for (var x = 0; x <= 3; x++) {    
     $("#answer"+x).html(question10.answers[x]);
};
    $(".questionPage").show();
    $("#questionButton10").hide();
    $("#endButton").show();
    countdown();
});
$("#endButton").click(function(){
    $(".breakPage").hide();
    $(".endPage").show();
});



 $("#answer0").click(function(){
         if(questionNum==1||questionNum==5||questionNum==6){
            rightWrong= true;
        }else{
            rightWrong= false;
        }
        checkGame();
        stop();
        
});
 $("#answer1").click(function(){ 
        if (questionNum==2||questionNum==4||questionNum==9){
            rightWrong=true;
        }else{
            rightWrong=false;
        }        

        checkGame();
        stop(); 

});
 $("#answer2").click(function(){
        if (questionNum==7||questionNum==8){
            rightWrong=true;
        }else{
            rightWrong=false;
        }
        checkGame();  
        stop(); 
});
 $("#answer3").click(function(){
        if (questionNum==0||questionNum==3||questionNum==10){
            rightWrong=true;

        }else{
            rightWrong=false;
        }
        checkGame(); 
        stop();
    });