Meteor.methods({
  'insertStudent': function(user) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();
    /*
    Students.insert({
      name: quizName,
      createdBy: currentUserId,
      dateCreated: now,
      dateModified: now,
    });*/

    console.log('Student "' + user + '" created.');
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
});
