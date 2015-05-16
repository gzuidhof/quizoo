Template.registerHelper('allQuizzes', function() {
  return Quizzes.find({}, {sort: {dateModified: -1}});
});
Template.registerHelper('getCurrentQuestion',function(quiz_id){
  //var quiz_id = quizInstance.quiz_id;
  return Questions.findOne({});
});
Template.registerHelper('getQuiz',function(quiz_id){
  return Quizzes.findOne({_id: quiz_id});
});
Template.teacherQuiz.events({
    "click .show-answer": function (event, template)
    {
      Meteor.call('toggleAnswers',template.data.quizInstance._id);
  },
  "click .next-question": function(event, template)
  {
    Meteor.call('nextQuestion',template.data.quizInstance._id);
  }
});
Template.registerHelper('getCurrentQuizInstance',function(input){
  return Session.get("quizInstance");
});
