const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = (answer) => {
    answers.push(answer.trim());
    if (answer.length < questions.length) {
      rl.question(questions[answer.length], questionAnswered);
    } else {
      return done(answers);
    }
  };
  rl.question(questions[0], questionAnswered);
}
