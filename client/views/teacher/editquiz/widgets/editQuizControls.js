Template.editQuizControls.events({
  'click .remove-quiz': function(event, template) {
    event.preventDefault();
    var quiz = template.data.quiz;

    if (!quiz) {
      console.error("No quiz in context!")
    }
    else {
      Meteor.call('removeQuiz', quiz._id);
    }

    Router.go('/teacher/dashboard');
    return false;

  }

});
