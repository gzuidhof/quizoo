Template.teamList.events({
  'click .remove-team': function(event, template) {

    var team_id = this._id
    Meteor.call("removeTeam", team_id)

  },
  'click .select-team': function(event, template) {
    var stud_id = Session.get("studentSelected")
    if(stud_id){
      Meteor.call("addUserToTeam", stud_id, this._id)
    }
  },


  'click .remove-member': function(event, template) {


    var stud_id = this._id
    Meteor.call("removeUserFromTeam", stud_id)

  },
});
