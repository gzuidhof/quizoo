Template.createQuestion.events({
  'submit form': function(event, template) {
    event.preventDefault();

    var question = event.target.questionText.value;

    if (!question || question.length == 0) {
      return false;
    }
    var quiz_id = template.data.quiz._id
    Meteor.call('insertQuestion', quiz_id, question);
    event.target.questionText.value = "";

    return false;

  }

});
