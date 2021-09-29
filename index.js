var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question("Enter your name : ")
console.log(chalk.yellow("Hello " + username + " ! "));
console.log(chalk.yellow("Welcome to :Pokemon Quiz ? " + "\n"));
console.log(chalk.yellow(" +1 for right answers and 0 for wrong answers" + "\n" + "There are 2 rounds . if all the questions in Round I are answered correctly only then Round II unlocks."))
var score = 0;

var questionOne = { 
  question: "How many types of Pokémon are there?" + "\n" + " 1:4  2:12  3:18  4:21  ",
  answer:3
};

var questionTwo = {
  question : "What species is Zapdos? " + "\n" + "1:ELECTRIC  2:WATER  3:GROUND  4:PSYCHIC  ",
  answer :1 
};
var questionThree = {
  question : "Complete this line from the original Pokémon show:Team Rocket are… "+ "\n" + "1:2HUMANS AND A POKEMON  2:BLASTING OFF AGAIN  3:ALLERGIC TO DAIRY  4:BLASTING OFF FOR YET ANOTHER EPISODE ",
  answer :2
};

var questionFour = {
  question : "Which of these Pokémon types is Pikachu STRONGEST against? "  + "\n" + " 1:ELECTRIC  2:WATER  3:GRASS  4:DRAGON", 
  answer :2

};
var questionFive = {
  question : "Which of these is NOT a kind of Pokémon? "  + "\n" + " 1:ELECTRIC  2:GHOST  3:GRASS  4:STEAM ",
  answer :4
} ;
var questionSix = {
  question:"The Pokémon anime series has focused on the adventures of Ash since it made its debut in 1997. But what is Ash's surname? " + "\n" + " 1:Kotchum  2:Katchum  3:Ketchum  4:Ketchup ",
  answer:4 } ;
var questionSeven = {
  questionSeven:"Loveable inept rogues Team Rocket have been trying to catch Ash's Pikachu for decades. What are their names?" + "\n" + " 1:Jessie and James  2:Joanie and James  3:Jenny and James 4:Jessie and Jimbob ",
  answer:1
 } ;
var questionEight = {
  question:"The new series of the Pokémon anime, Pokémon Journeys, introduces a new companion to Ash. What is his name?" + "\n" + "1:JO  2:TRO  3:DO  4:GOH ",
  answer:4
 } ;
var questionNine = {
  question:"The first legendary Pokémon, introduced in the Kanto region are Articuno, Zapdos, and …"+ "\n" + "1:MEW  2:LUGIA  3:VICTINI  4:MOLTRES ",
  answer:4
} ;
var questionTen = {
  question:"Who was the voice of Detective Pikachu in the-Pokémon Detective Pikachu movie?" + "\n" + "1:Justice Smith  2:Omar Chaparro  3:Bill Nighy  4:Ryan Reynolds ",
  answer:4
};
var questionEleven = {
  question:"Pokémon: Twilight Wings, was set in which region?"  + "\n" + "1:Kanto  2:Sinnoh  3:Unova  4:Galar ",
  answer:4
};
var questionTwelve = {
  question:"The starter Pokémon for each of the main games in the series are always a choice between which three types?" + "\n" + "1:Grass, Fire and Water  2:Water, Fire and Ice  3:Grass, Rock and Flying  4:Grass, Dragon and Water " ,
  answer:1
};
var questionThirteen = {
  question:"The Alola region, which was the setting for Pokémon Sun and Pokémon Moon, is loosely based on which US state?" + "\n"+ "1:Florida  2:Hawaii  3:New York  4:California " ,
  answer:2
};


var questions1 = [questionOne , questionTwo, questionThree, questionFour, questionFive];
var questions2 = [questionSix, questionSeven, questionEight, questionNine, questionTen, questionEleven, questionTwelve, questionThirteen];
function checkanswer(question , answer ){
  answerKey= ["1","2","3","4"];
  var userAnswer = readlineSync.keyInSelect(answerKey, question); 
  userAnswer=userAnswer+1;
 if (userAnswer === answer)
  {//console.log(23, userAnswer, answer);
    score = score + 1;
    console.log(chalk.green("You are right.Your score is : " + score)); 
}
  else {//console.log(23, userAnswer, answer);
     console.log(chalk.red("You are wrong . Your score is : " + score));
     
}}


for (var i = 0; i < questions1.length ; ++i){
  checkanswer(questions1[i].question , questions1[i].answer)
  console.log("------------------------")
}

if (score === 5){
  console.log("You have unlocked Level 2!");
  for (var i = 0; i < questions2.length ; ++i){
  checkanswer(questions2[i].question , questions2[i].answer)
  console.log("------------------------")
}
}

console.log(chalk.blue("Thank You for completing the Quiz" + "userAnswer." + " Your Score is " + score));