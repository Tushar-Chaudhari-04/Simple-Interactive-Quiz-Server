const nedb = require("nedb");

const questions = new nedb({ filename: "db/questions.db", autoload: true });
const userScore = new nedb({ filename: "db/userScore.db", autoload: true });

module.exports.questions = questions;
module.exports.userScore = userScore;
