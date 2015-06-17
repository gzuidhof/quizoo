Template.studentList.events({
  'click .select-student': function(event, template) {

    if(Session.get("studentSelected") == this.user_id){
      Session.set("studentSelected", undefined);
    }
    else{
      Session.set("studentSelected", this.user_id);
    }
  },
});
