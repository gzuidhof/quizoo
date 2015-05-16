Meteor.methods({
  'insertQuestion': function(quiz_id, questionText) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    var quiz = Quizzes.findOne({_id: quiz_id});


    var id = Questions.insert({
      text: questionText,
      answers: [{value: 'nee', correct: true},{value: 'ja', correct: false}],
      answerType: 0,
    });

    Quizzes.update({_id: quiz_id}, {$push: {questions: id}});

    console.log('Question "' + questionText + '" created.');
  },

  'removeQuestion': function(quiz_id, question_id) {

    var question = Questions.findOne({_id:question_id});
    var text = question.text || "without text";

    Questions.remove({
      _id: question_id,
    });

    Quizzes.update({_id: quiz_id}, {$pull: {questions:{_id: question_id}}});
    console.log('Question "' + text + '" removed.');
  }

});
