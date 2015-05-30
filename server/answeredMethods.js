Meteor.methods({
  'updateAnswered': function(quizInstance_id, chosenAnswer_id) {
    //callback mag niet
    var quizInstance = QuizInstances.findOne({_id: quizInstance_id});
    var currentUserId = Meteor.userId();
    var currentQuestionIndex = quizInstance.currentQuestionIndex;
    var question = Questions.findOne({answers:
                                        { $elemMatch : { _id : chosenAnswer_id}}
                                    });
    var answer = question.answers.filter(function( obj ) {
        return obj._id == chosenAnswer_id;
    });
    var filter = {user_id : currentUserId,
                  question_id : currentQuestionIndex,
                  quizInstance_id : quizInstance._id};
    var now = new Date();
    var answer = {
      user_id : currentUserId,
      question_id: currentQuestionIndex,
      quizInstance_id : quizInstance._id,
      value: chosenAnswer_id,
      correct: answer[0].correct,
      dateCreated: now,
    }
    Answered.update(filter,answer,{upsert: true, multi:false});
    console.log('User "' + currentUserId + '" answered "' + chosenAnswer_id + '" on question "'+currentQuestionIndex+'" on quizInstance "'+quizInstance._id+'".');
  }
});
