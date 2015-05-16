Meteor.methods({
  'insertQuestion': function(quiz_id, questionText) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    Questions.insert({
      quiz_id: quiz_id,
      text: questionText,
      answers: [{value: 'nee', correct: true},{value: 'ja', correct: false}],
      answerType: 0,
    });

    console.log('Question "' + questionText + '" created.');
  },

  'removeQuestion': function(question_id) {

    var question = Questions.findOne({_id:question_id});
    var text = question.text || "without text";

    Questions.remove({
      _id: question_id,
    });

    console.log('Question "' + text + '" removed.');
  }

});
