Template.registerHelper('allQuizzes', function() {
  return Quizzes.find({}, {sort: {dateModified: -1}});
});
Template.registerHelper('getCurrentQuestion', function(quizInstance) {
  //var quiz_id = quizInstance.quiz_id;
  return question = Questions.findOne({});
});
