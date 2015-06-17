Template.teamList.events({
  'click .remove-team': function(event, template) {

    var team_id = this._id
    Meteor.call("removeTeam", team_id)

  },
  'click .select-team': function(event, template) {
    var stud_id = Session.get("studentSelected")
    var prev_team_id = Session.get("teamSelected")

    if(stud_id){

      if(prev_team_id){
        Meteor.call("removeUserFromTeam", stud_id, prev_team_id);
        Session.set("teamSelected", undefined);
      }
      Meteor.call("addUserToTeam", stud_id, this._id);
      Session.set("studentSelected", undefined);


    }
  },
  'click .remove-member': function(event, template) {


    var team_id = this.teamInfo._id;
    var stud_id = this.memberInfo.user_id;
    Meteor.call("removeUserFromTeam", stud_id, team_id);
    Session.set("studentSelected", undefined);
    Session.set("teamSelected", undefined);

  },
  'click .select-student-in-team': function(event, template) {

    if(Session.get("studentSelected") == this.memberInfo.user_id){
      Session.set("studentSelected", undefined);
      Session.set("teamSelected", undefined);
    }
    else{
      Session.set("studentSelected", this.memberInfo.user_id);
      Session.set("teamSelected", this.teamInfo._id);
    }
  },
});
