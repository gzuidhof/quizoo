Template.registerHelper('allQuizzes', function() {
  return Quizzes.find({}, {sort: {dateModified: -1}});
});

Template.registerHelper('getCurrentQuestion',function(quizInstance){
  var quiz_id = quizInstance.quiz_id;
  var quiz = Quizzes.findOne({_id: quiz_id});
  var question_id = quiz.questions[quizInstance.currentQuestionIndex];
  return Questions.findOne({_id: question_id});
});

Template.registerHelper('getQuiz',function(quiz_id){
  return Quizzes.findOne({_id: quiz_id});
});
Template.registerHelper('getCurrentQuizInstance',function(input){
  var quizInstance = QuizInstances.findOne({createdBy: Meteor.userId(), status: {$in: [0,1,2,3]}});
  return quizInstance;
});
Template.registerHelper('hasActiveQuiz',function(input){
    return !!QuizInstances.findOne({createdBy: Meteor.userId(), status: {$in: [0,1,2,3]}});
});
Template.registerHelper('percentageOfQuizCompleted',function(quizInstance)
{
  if(!quizInstance){
    return 0;
  }
  else {
    return util.percentageQuizDone(quizInstance);
  }
});
Template.registerHelper('quizCompleted',function(quizInstance)
{
  if(!quizInstance){
    return false;
  }
  else {
    return util.percentageQuizDone(quizInstance) == 100;
  }
});
