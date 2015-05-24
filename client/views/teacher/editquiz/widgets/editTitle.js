Template.editTitle.events({
  'submit form': function(event, template) {
    event.preventDefault();

    var quizName = event.target.quizName.value;

    if (!quizName || quizName.length == 0) {
      return false;
    }
    var quiz_id = template.data.quiz._id;

    //console.log(template.data.quiz._id);
    Meteor.call('updateQuizName', quiz_id, quizName);

    Session.set('isEditingQuiz', false);
    return false;
  },
  'click .click-to-edit': function(event, template) {
    event.preventDefault();

    Session.set('isEditingQuiz', true);
    return false;
  }



});




Template.editTitle.helpers({
  isEditingQuiz: function() {
    return Session.get('isEditingQuiz');
  }
});
