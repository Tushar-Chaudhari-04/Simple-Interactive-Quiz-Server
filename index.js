const express = require("express");
const cors = require("cors");
const db = require("./db.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const quizRouter = require('./router/QuizQuestionRouter.js')

app.use('/api', quizRouter);

app.listen(8081, () => {
  console.log("Quiz Server is working");
});
app.get("/", (req, res) => {
  res.send("Welcome to Quiz Server");
});
