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
  return QuizInstances.findOne({createdBy: Meteor.userId(), status: {$in: [0,1,2,3]}});
});
Template.registerHelper('hasActiveQuiz',function(input){
    return !!QuizInstances.findOne({createdBy: Meteor.userId(), status: {$in: [0,1,2,3]}});
});
Template.currentQuiz.events({
    "click .stop-quiz": function (event, template)
    {
      var quiz_id = this._id;
      Meteor.call('stopQuizInstance',quiz_id);
  }
});
