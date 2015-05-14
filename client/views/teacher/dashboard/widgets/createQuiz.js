Template.createQuiz.events({
  'submit form': function(event) {
    event.preventDefault();

    var quizName = event.target.quizName.value;

    if (!quizName || quizName.length == 0) {
      return false;
    }

    Meteor.call('insertQuiz', quizName);
    event.target.quizName.value = "";

    return false;

  }

});
