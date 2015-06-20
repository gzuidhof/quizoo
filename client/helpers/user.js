Template.registerHelper("currentUser", function() {

    return Meteor.user().username
});

Template.registerHelper("currentUserId", function() {

    var id = Meteor.userId()
    return id
});
