Template.task.events({
    "click .start": function () {
      Tasks.remove(this._id);
    }
  });
