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
  },

  'updateQuizName': function(quiz_id, newName) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    var quiz = Quizzes.findOne({_id:quiz_id});
    var oldName = quiz.name;

    Quizzes.update(quiz_id, {$set: { name: newName, dateModified: now}});

    console.log('Quiz "' + oldName + '" name changed to "' + newName + '".');
  }
});
