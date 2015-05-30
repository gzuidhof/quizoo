Meteor.methods({
  'insertQuestion': function(quiz_id, questionText) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    var quiz = Quizzes.findOne({_id: quiz_id});


    var id = Questions.insert({
      text: questionText,
      answers: [{value: 'nee', correct: false, _id: Random.id()},
      {value: 'ja', correct: false, _id: Random.id()},
      {value: 'nakken', correct: true, _id: Random.id()},
      {value: 'haten', correct: false, _id: Random.id()}],
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
  },

  'updateQuestion': function(question_id, update) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    Questions.update({_id: question_id}, update);
    console.log('Question "' + question_id + '" updated.');
  },

  'insertAnswer': function(question_id, value) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not

    var newAnswer = {value: value, correct: false, _id: Random.id()}
    Questions.update({_id: question_id}, {$push: {answers: newAnswer}});

    console.log('Answer "' + value + '" added.');
  },

  'updateAnswer': function(question_id, answer_id, value) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();


    Questions.update({_id: question_id, answers._id: answer_id},
      {$set: {answers.$: value}});

    console.log('Answer updated: "' + value + '"');
  },




});
