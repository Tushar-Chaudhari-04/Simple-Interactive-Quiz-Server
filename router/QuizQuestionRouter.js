const express = require('express');
const router = express.Router();
const { addQuizDataController,getQuizDataController,submitQuizController } = require('../controller/QuizQuestionController');

router.post("/addQuizData",addQuizDataController)
router.get("/quiz",getQuizDataController)
router.post("/submit",submitQuizController)
module.exports = router;