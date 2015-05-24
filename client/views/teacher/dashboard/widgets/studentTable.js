Template.studentTable.events({
  'submit form': function(event) {
    event.preventDefault();
    var username = event.target.username.value;

    if (!username || username.length == 0) {
      return false;
    }

    Meteor.call('insertStudent', username)
    event.target.username.value = "";
    return false;
  },

  'click tr': function(event) {
    Modal.show('userEditModal', this);
  }

});
