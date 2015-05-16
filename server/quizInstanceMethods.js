Meteor.methods({
  'startQuiz': function(quiz_id) {

    //var quiz = Quizzes.findOne({_id:quiz_id});

    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    QuizInstances.insert({
      quiz_id: quiz_id,
      createdBy: currentUserId,
      participants: [],
      dateCreated: now,
      dateModified: now
    });

    console.log('Quiz instance "' + quiz_id + '" started.');
  },
  'addTeamsToQuiz' : function(quizInstance_id, teams){
    
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
  'joinQuiz': function(quiz_id) {

  },

  'stopQuiz': function(quiz_id) {

    var quiz = Quizzes.findOne({_id:quiz_id});
    var name = quiz.name || "NO NAME";


    console.log('Quiz "' + name + '" removed.');
  },


});
