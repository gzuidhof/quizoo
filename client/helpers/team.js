Template.registerHelper('allTeams', function() {
  return Teams.find({});
});

Template.registerHelper('membersOfTeam', function(team) {

  var teamMembers = [];
  var member_ids = team.members

  member_ids.forEach(function (id){
    var member  = Students.findOne({_id:id})
    if(member){
      teamMembers.push(member);
    }
  });
  return teamMembers;
});
