Meteor.methods({
  'addUserToTeam' : function(user_id, team_id){
    var currentUserId = Meteor.userId();
    var team = Teams.findOne({_id: team_id});
    var now = new Date();

    if(team){
      if(team.members.indexOf(user_id) == -1)
      {
        Teams.update({_id: team_id}, { $push: { members: user_id }})
        console.log("Added user to " + team.name);
      }
    }
    else {
      console.error("try to add user to undefined team")


    }
  },
  'removeUserFromTeam' : function(user_id, team_id){
    var currentUserId = Meteor.userId();
    var team = Teams.findOne({_id: team_id});
    var now = new Date();

    if(team){
      if(team.members.indexOf(user_id) == -1)
      {
        Teams.update({_id: team_id}, { $pop: { members: user_id }})
        console.log("Removed user from " + team.name);
      }
      else {
        console.error("Tried to remove user from team (s)he's not even in!");
      }
    }
    else {
      console.error("Could not find team to remove user from!")
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
