Template.answerButton.events({
    "click .answer-option": function (event, template)
    {
      Meteor.call('updateAnswered',this.quizInstance._id, this._id);
  }
});
