Template.teamList.events({
  'click .remove-team': function(event, template) {

    var team_id = this._id
    Meteor.call("removeTeam", team_id)



  }

});
