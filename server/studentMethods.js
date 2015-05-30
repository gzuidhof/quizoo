Meteor.methods({
  'insertStudent': function(username) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    Accounts.createUser({
      username: username,
      password : 'wachtwoord',
      profile  : {}
    });

    var u = Meteor.users.findOne({username:username});
    var user_id = u._id;

    Students.insert({
      user_id: user_id,
      createdBy: currentUserId,
      dateCreated: now,
      name: "Zonder Naam",
      points: 0,
      powers: []
    });

    console.log('Student "' + username + '" created.');
  },

  'removeStudent': function(student_id) {

    var student = Students.findOne({_id:student_id});

    if (!student) {
      console.error("Student to be removed not found!");
      return
    }

    var name = Meteor.users.findOne({_id:student.user_id});
    Students.remove({
      _id: student_id,
    });

    console.log('Student "' + name + '" removed.');
  },
  'updateStudent': function(student_id, value) {
    //TODO Input validation!
    var name = Students.update({_id:student_id}, {$set: value});
    console.log('Student "' + student_id + '" updated.');
  },


});
