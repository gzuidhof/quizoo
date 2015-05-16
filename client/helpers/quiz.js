Template.registerHelper('allQuizzes', function() {
  return Quizzes.find({}, {sort: {dateModified: -1}});
});

Template.registerHelper('getCurrentQuestion',function(quizInstance){
  var quiz_id = quizInstance.quiz_id;
  var quiz = Quizzes.findOne({_id: quiz_id});
  console.log(quiz);
  var question_id = quiz.questions[quizInstance.currentQuestionIndex];
  console.log(question_id);
  console.log(Questions);
  return Questions.findOne({_id: question_id});
});

Template.registerHelper('getQuiz',function(quiz_id){
  return Quizzes.findOne({_id: quiz_id});
});
Template.registerHelper('getCurrentQuizInstance',function(input){
    return Session.get("quizInstance");
});
