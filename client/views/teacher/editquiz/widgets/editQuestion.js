Template.editQuestion.events({
  'click .remove-question': function(event, template) {
    event.preventDefault();
    //var question = template.data;
    var _id = template.data._id

    if (!_id) {
      console.error("No question in context!")
    }
    else {
      Meteor.call('removeQuestion', _id);
    }

    return false;

  }

});
