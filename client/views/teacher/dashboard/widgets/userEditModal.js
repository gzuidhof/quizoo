Template.userEditModal.events({
  'click .remove-user': function(event) {
    event.preventDefault();
    var user_id = this.user_id;

    var context = {
      title: "Weet je het echt heel zeker?",
      text: "Dit heeft grote consequenties..\n Het gehele gebruikersaccount wordt verwijderd!",

      callback: function() { //Second modal
        context2 = {
          title: "Niet komen huilen bij de developers",
          text: "Nog steeds? Dit kan niet ongedaan gemaakt worden!",
          callback: function() {
            Modal.hide();
            Meteor.call('removeUser', user_id);
          }
        }
        Modal.show('confirmRemoveModal', context2);
      }
    };
    Modal.hide();
    Modal.show('confirmRemoveModal', context);

  },
  'submit form': function(event,template) {
    event.preventDefault();
    var nameFieldValue = event.target.nameField.value;

    if (!nameFieldValue || nameFieldValue.length == 0) {
      return false;
    }

    var student_id = template.data._id;
    Meteor.call('updateStudent', student_id,{name:nameFieldValue})


    event.target.nameField.value = "";
    Modal.hide();

    return false;
  },

  'click tr': function(event) {
    Modal.show('userEditModal', this);
  }




});
