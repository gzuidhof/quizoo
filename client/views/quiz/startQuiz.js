Template.startQuiz.events({
    "click .start-quiz": function (event, template)
    {
      var quiz_id = this._id;
      Meteor.call('createQuizInstance',quiz_id);
  }
});
