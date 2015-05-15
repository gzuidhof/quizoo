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

  'removeQuiz': function(quiz_id) {

    var quiz = Quizzes.findOne({_id:quiz_id});
    var name = quiz.name || "NO NAME";

    Quizzes.remove({
      _id: quiz_id,
    });

    console.log('Quiz "' + name + '" removed.');
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
