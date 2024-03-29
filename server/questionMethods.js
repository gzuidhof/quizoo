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

    Quizzes.update({_id: quiz_id}, {$pull: {questions: question_id}});

    Questions.remove({
      _id: question_id,
    });
    console.log('Question "' + text + '" removed.');
  },

  'updateQuestion': function(question_id, update) {
    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    Questions.update({_id: question_id}, {$set: update});
    console.log('Question "' + question_id + '" updated.');
  },

  'moveQuestion': function(quiz_id, question_id, direction) { //true for up, false for down
      var quiz = Quizzes.findOne({_id: quiz_id});
      var questionList = quiz.questions;

      var index = questionList.indexOf(question_id);

      var temp = questionList[index];


      if (direction===true) {
        if (index === 0) {
          return;
        }
        questionList[index] = questionList[index-1];
        questionList[index-1] = temp;
      }

      else {
        if (index === questionList.length) {
          return;
        }
        questionList[index] = questionList[index+1];
        questionList[index+1] = temp;
      }

      Quizzes.update({_id: quiz_id}, {$set: {questions: questionList}});
      console.log('Changed question order ' + (direction? 'up':'down')+'.');
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


    Questions.update({_id: question_id, 'answers._id': answer_id},
      {$set: {'answers.$': value}});

    console.log('Answer updated: "' + value + '"');
  },


  'removeAnswer' : function(question_id, answer_id){
    var currentUserId = Meteor.userId();
    var now = new Date();

    Questions.update({_id: question_id}, { $pull: { answers: {_id: answer_id} }});

    console.log('Removed answer option from question. id: ' + answer_id );
  },
});
