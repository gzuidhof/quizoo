Template.registerHelper('allQuizzes', function() {
  return Quizzes.find({}, {sort: {dateModified: -1}});
});
