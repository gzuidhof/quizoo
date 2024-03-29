Template.registerHelper('allTeams', function() {
  return Teams.find({});
});

Template.registerHelper('membersOfTeam', function(team) {

  var teamMembers = [];
  var member_ids = team.members

  member_ids.forEach(function (id){
    var member  = Students.findOne({user_id:id})
    if(member){
      teamMembers.push(member);
    }
  });
  return teamMembers;
});

Template.registerHelper('participatingTeam', function(team, participant_ids) {
  var member_ids = team.members
  var contains_participant = false

  member_ids.forEach(function (id){
    if(_.contains(participant_ids, id)){

      contains_participant = true;
    }
  });

  return contains_participant;
});

Template.registerHelper('teamNameOfUser', function(teams, user_id) {
  teamname = "Geen team"
  teams.forEach(function (team){
    var member_ids = team.members

    if(_.contains(member_ids, user_id)){
        teamname = team.name;
    }

  });
  return teamname;
});
