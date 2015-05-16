Template.editQuizControls.events({
  'click .remove-quiz': function(event, template) {
    event.preventDefault();
    var quiz = template.data.quiz;

    if (!quiz) {
      console.error("No quiz in context!");
    }
    else {

      var closure = function() {
        Meteor.call('removeQuiz', quiz._id);
        Router.go('/teacher/dashboard');
      }
      var context = {
        title: "Oh ja",
        text: "Weet je zeker dat je de quiz wilt verwijderen?",
        callback: closure,
      }

      Modal.show('confirmRemoveModal', context)
    }

    return false;
  }

});
