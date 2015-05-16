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
