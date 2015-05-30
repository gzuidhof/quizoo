Template.studentList.events({
  'click .select-student': function(event, template) {

    if(Session.get("studentSelected")){
      Session.set("studentSelected", undefined);
    }
    else{
      Session.set("studentSelected", this._id);
    }
  },
});
