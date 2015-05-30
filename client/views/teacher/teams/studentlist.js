Template.studentList.events({
  'click .select-student': function(event, template) {

    if(Session.get("studentSelected") == this._id){
      Session.set("studentSelected", undefined);
    }
    else{
      Session.set("studentSelected", this._id);
    }
  },
});
