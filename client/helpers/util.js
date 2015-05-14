Template.registerHelper("prettifyDate", function(timestamp) { //3 uur geleden
    return moment(new Date(timestamp)).fromNow();
});
Template.registerHelper("prettifyTimestamp", function(timestamp) {
    return moment(new Date(timestamp)).format("dddd D MMM YYYY");
});

Template.registerHelper("usernameOfId", function(userId) {
    return Meteor.users.findOne({_id:userId});
});
