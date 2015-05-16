Template.confirmRemoveModal.events({
  'click .confirm-remove': function(event, template) {
    event.preventDefault();
    var callback = template.data.callback;

    if (!callback) {
      console.error("No callback for remove confirm modal.");
    }

    callback();
    return false;
  }

});
