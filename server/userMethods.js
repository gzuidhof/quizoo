Meteor.methods({
  'removeUser': function(user_id) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    var user = Meteor.users.findOne({_id: user_id});


    console.warn('\nUSER DELETION "' + user.username + '"');


    if (Students.remove({user_id: user_id})) {
      console.log("Removed from Students");
    };

    console.log('Removing actual user');
    if (Meteor.users.remove({_id: user_id})) {
      console.log("Success");
    };

    console.log("Done removing user.");
  }
});
