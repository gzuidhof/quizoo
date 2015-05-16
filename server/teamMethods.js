Meteor.methods({
  'addUserToTeam' : function(user_id, team_id){
    var currentUserId = Meteor.userId();
    var team = Teams.findOne({_id: team_id});
    var now = new Date();

    if(team){
      if(team.participants.indexOf(user_id) == -1)
      {
        Teams.update({_id: team_id}, { $push: { participants: user_id })
      }
    }
    else {
      Teams.insert({
        participants: [user_id],
        createdBy: currentUserId,
        dateCreated: now
      });
    }
}
});
