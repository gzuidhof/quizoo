Template.teamList.events({
  'click .remove-team': function(event, template) {

    var team_id = this._id
    Meteor.call("removeTeam", team_id)

  },
  'click .select-team': function(event, template) {
    var stud_id = Session.get("studentSelected")
    if(stud_id){
      Meteor.call("addUserToTeam", stud_id, this._id);

      Session.set("studentSelected", undefined);
    }
  },
  'click .remove-member': function(event, template) {


    var team_id = this.teamInfo._id;
    var stud_id = this.memberInfo._id;
    Meteor.call("removeUserFromTeam", stud_id, team_id);


  },
  'click .select-student-in-team': function(event, template) {

    if(Session.get("studentSelected") == this.memberInfo._id){
      Session.set("studentSelected", undefined);
    }
    else{
      Session.set("studentSelected", this.memberInfo._id);
    }
  },
});
