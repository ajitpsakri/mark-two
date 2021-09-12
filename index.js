//imports
let readlineSync = require('readline-sync');
let chalk = require('chalk');
const fs = require('fs')
//data
let score = 0;
const highScoreDB = []
const knowledgeBase = [
	{
		question: "How many years was the war? ",
		answer: "a",
		options: {
			one: 100,
			two: 50,
			three: 87,
			four: 71
		}
	},
	{
		question: "How many episodes does Book 1-Water has? ",
		answer: "c",
		options: {
			one: 25,
			two: 16,
			three: 20,
			four: 18,
		}
	},
	{
		question: "what is the name of toph student 'the black one'?",
		answer: "d",
		options: {
			one: "mung-dan-tae the third",
			two: "oppa-su-fu the third",
			three: "malinga the third",
			four: "mucheguchelapuche the third"
		}
	},
	{
		question: "what is the name of zuko's mom? ", answer: "c",
		options: {
			one: "uttosama-sati",
			two: "Mesu raion",
			three: "Ursa",
			four: "Shin no josei"
		}
	},
	{
		question: "How many episodes does Book 3-Fire has? ",
		answer: "a",
		options: {
			one: 21,
			two: 16,
			three: 70,
			four: 20
		},
	},
	{
		question: "what is the name of Aang mentor? ",
		answer: "b",
		options: {
			one: "Monk Gayatori",
			two: "Monk Gyatso",
			three: "Monk jujutsu raka jutsu",
			four: "Monk Gyan-hogri"
		}
	},
	{
		question: "what would you name sokka's sarcasm?",
		answer: "d",
		options: {
			one: "sokmorphism",
			two: "soka-Bumarangism",
			three: "soka-moti-bendism",
			four: "sokcasm"
		}
	},
]


//functions 
const game = () => {
	for (let i = 0; i < knowledgeBase.length; i++) {
		//incialization
		currentOptions = knowledgeBase[i].options
		currentQuestion = `${i + 1}) ${knowledgeBase[i].question}\na. ${currentOptions.one}\nb. ${currentOptions.two}\nc. ${currentOptions.three}\nd. ${currentOptions.four}\n`;
		currentAnswer = knowledgeBase[i].answer;

		//branching
		if (readlineSync.question(currentQuestion) === currentAnswer) {
			console.log(chalk.green(userName + " your currect"));
			console.log(' ')
			score++
		}
		else {
			console.log(chalk.red(`${userName} your wrong, answer is ${currentAnswer}`))
			console.log(' ')
		}
	}
}
const updateAndShowHighScore = (score, userName) => {
	//read
	const data = JSON.parse(fs.readFileSync('data.json'));
	//update
	data.push({
		name: userName,
		score: score,
	})
	let dataString = JSON.stringify(data, null, 2);
	fs.writeFileSync('data.json', dataString);
	//display
	let tempHighScoreData = [...data]
	let maxElementIndex = 0;
	if (tempHighScoreData.length < 5) {
		for (let i = 0; i < data.length; i++) {
			let max = tempHighScoreData[0].score;
			for (let j = 0; j < tempHighScoreData.length; j++) {
				if (tempHighScoreData[j].score > max) {
					max = tempHighScoreData[j].score;
					maxElementIndex = j
				} else {
					max = max;
				}
			}

			console.log(chalk.yellow(`High Score Rank ${i + 1}: ${tempHighScoreData[maxElementIndex].name} with score ${tempHighScoreData[maxElementIndex].score}`))
			tempHighScoreData.splice(maxElementIndex, 1)
		}
	} else {
		for (let i = 0; i < 5; i++) {
			let max = tempHighScoreData[0].score;
			for (let j = 0; j < tempHighScoreData.length; j++) {
				if (tempHighScoreData[j].score > max) {
					max = tempHighScoreData[j].score;
					maxElementIndex = j
				} else {
					max = max;
				}
			}
			console.log(chalk.yellow(`High Score Rank ${i + 1}: ${tempHighScoreData[maxElementIndex].name} with score ${tempHighScoreData[maxElementIndex].score}`))
				tempHighScoreData.splice(maxElementIndex, 1)
		}
	}
}
//main function
const userName = readlineSync.question(chalk.blueBright("What is your name? "));
console.log(' ');
console.log("Welcome " + chalk.bold(userName) + " to Avatar Academy, Answer the quiz and make high score to compete with you friends!");
console.log(' ');
game();
console.log(chalk.blueBright(`Score is: ${score}/7`));

if (score === 0) {
	console.log(chalk.blueBright("You don't know anything about Avatar  :("))
} else if (score > 0) {
	if (score > 2 && score < 5) {
		console.log(chalk.blueBright("You know about Avatar ( ╹▽╹ )"))
	} else if (score === 7) {
		console.log(chalk.blueBright("Your OG fan of Avatar (ﾉﾟ0ﾟ)ﾉ~"))
	}
}
	updateAndShowHighScore(score, userName);