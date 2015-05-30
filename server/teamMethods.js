Meteor.methods({
  'addUserToTeam' : function(user_id, team_id){
    var currentUserId = Meteor.userId();
    var team = Teams.findOne({_id: team_id});
    var now = new Date();

    if(team){
      if(team.participants.indexOf(user_id) == -1)
      {
        Teams.update({_id: team_id}, { $push: { participants: user_id }})
      }
    }
    else {
      Teams.insert({
        participants: [user_id],
        createdBy: currentUserId,
        dateCreated: now
      });
    }
  },

  'insertTeam': function(teamName) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    if(!teamName) {
      teamName = Random.choice(Constants.possibleTeamNames)
    }

    Teams.insert({
      name: teamName,
      members: [],
      dateCreated: now
    });

    console.log('Team "' + teamName + '" created.');
  },

  'removeTeam': function(team_id) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not

    Teams.remove({_id: team_id});

    console.log('Team "' + team_id + '" removed.');
  },

});
