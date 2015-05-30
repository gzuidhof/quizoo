Meteor.methods({
  'createQuizInstance': function(quiz_id) {

    //var quiz = Quizzes.findOne({_id:quiz_id});

    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    QuizInstances.insert({
      quiz_id: quiz_id,
      createdBy: currentUserId,
      participants: [],
      status: 0,//0 -> starting, 1-> lobby, 2 -> Question, 3-> Answer, 4-> finished, 5-> aborted
      currentQuestionIndex : 0,
      dateCreated: now,
      dateModified: now
    });

    console.log('Quiz instance "' + quiz_id + '" started.');
  },
  'stopQuizInstance': function(quizInstance_id) {

    QuizInstances.update({_id: quizInstance_id}, {$set: {status:5}});
    console.log('Quiz_instance ' + quizInstance_id + 'has been aborted.');
  },
  'addTeamsToQuizInstance' : function(quizInstance_id, teams){

    var quizInstance = QuizInstances.findOne({_id : quizInstance_id});
    if(quizInstance.participants.length > 0) {

      teams.forEach(function(team){

        if(quizInstance.participants.indexOf(team) == -1) {

          QuizInstances.update({_id: team_id}, { $push: { participants: team }});
          console.log('Added "' + team_id + '" to quiz' + quiz_id + ".");
        }
      });
    }
    else {
      QuizInstances.update({_id: quizInstance_id}, {$set: {participants:teams}});
      console.log('Added "' + teams + '" to quiz' + quiz_id + ".");

    }
  },
  'joinQuiz': function(quizInstance_id) {

  },
  'toggleAnswers': function(quizInstance_id){
    QuizInstances.update({_id: quizInstance_id}, {$set: {status:3}});
    console.log('Toggled show answers for quizInstance ' + quizInstance_id + '.');

  },
  'nextQuestion': function(quizInstance_id){
    QuizInstances.update({_id: quizInstance_id}, {$inc: {currentQuestionIndex:1}});
    QuizInstances.update({_id: quizInstance_id}, {$set: {status:2}});
    console.log('Quiz_instance ' + quizInstance_id + 'went to the next question.');
  }

});
