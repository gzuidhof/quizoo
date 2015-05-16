Template.studentTable.events({
  'submit form': function(event) {
    event.preventDefault();
    var username = event.target.username.value;

    if (!username || username.length == 0) {
      return false;
    }

    var newStudent = Meteor.call('insertStudent', username);
    event.target.username.value = "";
    Modal.show("userEditModal", {data: newStudent});
    return false;
  },

  'click tr': function(event) {
    Modal.show('userEditModal', this);
  }

});
