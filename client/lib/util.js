util={};

util.percentageQuizDone = function (quizInstance){
  console.log(quizInstance);
  var quiz_id = quizInstance.quiz_id;
  var quiz = Quizzes.findOne({_id: quiz_id});
  return quizInstance.currentQuestionIndex == 0 ? 0 : Math.round((quizInstance.currentQuestionIndex)/quiz.questions.length*100);
};
