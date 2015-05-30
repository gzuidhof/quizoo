Template.currentQuiz.events({
    "click .stop-quiz": function (event, template)
    {
      var quiz_id = this._id;
      Meteor.call('stopQuizInstance',quiz_id);
  }
});
