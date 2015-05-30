Template.editQuestion.events({
  'click .remove-question': function(event, template) {
    event.preventDefault();
    //var question = template.data;
    var question_id = template.data.question._id;
    var quiz_id = template.data.quiz._id;

    Meteor.call('removeQuestion', quiz_id, question_id);

    return false;

  }

});
