Template.quizTable.events({
  'click .clickable': function(event, template) {
    var quiz_id = this._id;

    Router.go('/teacher/editquiz/'+quiz_id)

  }
});
