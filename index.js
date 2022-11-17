var readlineSync = require("readline-sync");
var chalk = require("chalk");
score = 0
function welcome() {
  var userId = readlineSync.question("Please enter your name? ")
  console.log("Welcome " + userId + "!!")
  console.log(userId + " Let's see how well you know me")
  console.log("..................")
  
}
//array of objects

var questions = [{
  question: "What is my name? : ",
  answer: "Dhruvi"
}, {
  question: "What is my favorite color? : ",
  answer: "red"
},
{
  question: "What is my Birthday Month? : ",
  answer: "January"
},
{
  question: "what is my favorite palace? : ",
  answer: "Nainital"
},
{
  question: "Who is my favorite friend? : ",
  answer: "vruti"
}

];


function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You were right")
    score++;
  }
  else {
    console.log("sorry! You are wrong!!")

  }

  console.log("..................")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}
function scores() {
  if (score >= 3) {
    console.log(chalk.green("You scored: ", score));
    console.log("you know me very well")
  } else {
    console.log(chalk.red("You scored: ", score));
    console.log("you don't know me wery well")
  }
}
welcome();

game();

scores()