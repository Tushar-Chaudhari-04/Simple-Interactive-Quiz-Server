const { questions,userScore } = require("../db");

const addQuizDataController = (req, res) => {
  for (let data in req.body) {
    const { text, options, correctAnswer } = req.body[data];

    try {
      questions.insert({
        text: text,
        options: options,
        correctAnswer: correctAnswer,
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  return res.status(200).json({
    success: true,
    message: "Quiz Data added successfully",
  });
};

const getQuizDataController = (req, res) => {
  try {
    questions.find({}, (err, data) => {
      if (data) {
        res.status(200).json({
          questions: data,
        });
      }
      if (err) {
        console.log("error", err);
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    });
  } catch (error) {
    console.log("error", error);
  }
};

const submitQuizController = (req, res) => {
  try {
    const answers = req.body;
    let score = 0;
    answers?.map((data,index) => {
      questions?.findOne({ _id: data.questionId }, (err, foundAnswer) => {
        if (foundAnswer) {
          if (foundAnswer.correctAnswer == data.selectedOption) {
            score++;
          }
        }
        if (err) {
          console.log("err", err);
        }
        if(index==answers.length-1){
         
          userScore.insert({
            score: score,
            totalQuestions:answers.length,
          })

          res.status(200).json({
            score: score,
            totalQuestions:answers.length,
          });
        }
      });
    });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  addQuizDataController,
  getQuizDataController,
  submitQuizController,
};
