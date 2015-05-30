Template.editQuestionAsked.events({
  'submit form': function(event, template) {
    event.preventDefault();

    var questionAsked = event.target.questionAsked.value;

    var question_id = template.data.question._id
    if (!questionAsked || questionAsked.length == 0) {
      return false;
    }

    Meteor.call('updateQuestion', question_id, {text:questionAsked});

    return false;

  }

});
