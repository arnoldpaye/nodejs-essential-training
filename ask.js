const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Nodejs?"
];

const answerEvents = collectAnswers(questions, (answers) => {
  console.log("Thank you for you answers!");
  console.log(answers);
  process.exit();
});

answerEvents.on("answer", answer => console.log(`The answer is ${answer}`));
