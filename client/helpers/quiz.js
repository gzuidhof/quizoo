Template.registerHelper('quiz', function() {
  return Quizzes.find({}, {sort: {dateModified: -1}});
});
