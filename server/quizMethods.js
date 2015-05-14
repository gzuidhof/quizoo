Meteor.methods({
  'insertQuiz': function(quizName) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    Quizzes.insert({
      name: quizName,
      createdBy: currentUserId,
      dateCreated: now,
      dateModified: now,
    });

    console.log('Quiz "' + quizName + '" created.');
  }

});
