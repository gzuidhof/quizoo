Template.createTeam.events({
  'click .create-team': function(event, template) {

    Meteor.call("insertTeam");


  }

});
