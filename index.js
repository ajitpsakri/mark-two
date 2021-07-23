//imports
let readlineSync = require('readline-sync');
let chalk = require('chalk');

//data
let score = 0;
const knowledgeBase = [
  {
    question:"what is the name of toph student 'the black one'?",
    answer:"d",
    options:{
      one:"mung-dan-tae the third",
      two:"oppa-su-fu the third",
      three:"malinga the third",
      four:"mucheguchelapuche the third"
    }
  },
  {
    question:"what is the name of zuko's mom? ",answer: "c",
    options:{
      one:"uttosama-sati",
      two:"Mesu raion",
      three:"Ursa",
      four:"Shin no josei"
    }
  },
  {
    question:"what is the name of Aang mentor? ",
    answer:"b",
    options:{
      one:"Monk Gayatori",
      two:"Monk Gyatso",
      three:"Monk jujutsu raka jutsu",
      four:"Monk Gyan-hogri"
    }
  },
  {
    question:"what would you name sokka's sarcasm?",
    answer:"d",
    options:{
      one:"sokmorphism",
      two:"soka-Bumarangism",
      three:"soka-moti-bendism",
      four:"sokcasm"
    }
  }
]

//logic
const userName = readlineSync.question("What is your name,end with bending you like? ");
console.log(' ');

for(let i =0;i<knowledgeBase.length;i++){

  currentOptions = knowledgeBase[i].options
  currentQuestion = `${knowledgeBase[i].question}\na. ${currentOptions.one}\nb. ${currentOptions.two}\nc. ${currentOptions.three}\nd. ${currentOptions.four}\n`;
  currentAnswer = knowledgeBase[i].answer;
  

  if(readlineSync.question(currentQuestion)===currentAnswer){
    console.log(chalk.green(userName + " your currect"));
    console.log(' ')
    score++
  }else{
    console.log(chalk.red(`${userName} your wrong, answer is ${currentAnswer}`))
    console.log(' ');
  }
  console.log(chalk.blueBright(`Score is: ${score}`))
}
