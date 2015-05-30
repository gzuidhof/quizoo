Template.registerHelper('allQuestions', function() {
  return Questions.find();
});

Template.registerHelper('questionsForQuiz', function(quiz) {

  if (!quiz) {
    return [];
  }

  var question_ids = quiz.questions;
  var questions = [];

  question_ids.forEach( function (id) {
    var question = Questions.findOne({_id: id})
    if (question)
      questions.push(question);
  });
  return questions;
});
