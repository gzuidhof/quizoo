Template.editQuestion.events({
  'click .question-up': function(event, template) {
    event.preventDefault();
    //var question = template.data;
    var question_id = template.data.question._id;
    var quiz_id = template.data.quiz._id;

    Meteor.call('moveQuestion', quiz_id, question_id, true);

    return false;

  },

  'click .question-down': function(event, template) {
    event.preventDefault();
    //var question = template.data;
    var question_id = template.data.question._id;
    var quiz_id = template.data.quiz._id;

    Meteor.call('moveQuestion', quiz_id, question_id, false);

    return false;

  }


});
