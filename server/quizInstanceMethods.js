Meteor.methods({
  'startQuiz': function(quiz_id) {

    //var quiz = Quizzes.findOne({_id:quiz_id});

    var currentUserId = Meteor.userId();
    //Todo: Check whether teacher or not
    var now = new Date();

    QuizInstances.insert({
      quiz_id: quiz_id,
      //createdBy: currentUserId,
      dateCreated: now,
      dateModified: now
    });

    console.log('Quiz instance "' + quiz_id + '" started.');
  },
  'setTeams' : function(quizInstance_id, teams){
    
    if(team){
      if(team.participants.indexOf(user_id) == -1)
      {
        Teams.update({_id: team_id}, { $push: { participants: user_id })
      }
    }
    else {
      Teams.insert({
        participants: [user_id],
        createdBy: currentUserId,
        dateCreated: now
      });
    }
    QuizInstances.update({_id: quizInstance_id}, {$set: {participants:teams}});
  },
  'joinQuiz': function(quiz_id) {

  },

  'stopQuiz': function(quiz_id) {

    var quiz = Quizzes.findOne({_id:quiz_id});
    var name = quiz.name || "NO NAME";


    console.log('Quiz "' + name + '" removed.');
  },


});
