util={};

util.percentageQuizDone = function (quizInstance){
  if(!quizInstance){
    return 0;
  }

  var quiz_id = quizInstance.quiz_id;
  var quiz = Quizzes.findOne({_id: quiz_id});

  if(!quiz){
    return 0;
  }
  
  console.log(quiz.questions.length)
  return quizInstance.currentQuestionIndex == 0 ? 0 : Math.round((quizInstance.currentQuestionIndex)/quiz.questions.length*100);
};
