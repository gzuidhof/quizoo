Template.registerHelper('allQuizzes', function() {
  return Quizzes.find({}, {sort: {dateModified: -1}});
});

Template.registerHelper('getCurrentQuestion',function(quizInstance){
  if(!quizInstance){
    return;
  }
  var quiz_id = quizInstance.quiz_id;
  var quiz = Quizzes.findOne({_id: quiz_id});
  if(!quiz){
    return;
  }
  var question_id = quiz.questions[quizInstance.currentQuestionIndex];
  return Questions.findOne({_id: question_id});
});

Template.registerHelper('getQuiz',function(quiz_id){
    return Quizzes.findOne({_id: quiz_id});
});
Template.registerHelper('getCurrentQuizInstance',function(input){
  var quizInstance = QuizInstances.findOne({createdBy: Meteor.userId(), status: {$in: [0,1,2,3]}});
  return quizInstance;
});
Template.registerHelper('hasActiveQuiz',function(input){
    return !!QuizInstances.findOne({createdBy: Meteor.userId(), status: {$in: [0,1,2,3]}});
});
Template.registerHelper('percentageOfQuizCompleted',function(quizInstance)
{
  if(!quizInstance){
    return 0;
  }
  else {
    return util.percentageQuizDone(quizInstance);
  }
});
Template.registerHelper('quizCompleted',function(quizInstance)
{
  if(!quizInstance){
    return false;
  }
  else {
    return util.percentageQuizDone(quizInstance) == 100;
  }
});
Template.registerHelper('isSelectedAnswer',function(quizInstance_id, answer_id)
{
  var quizInstance = QuizInstances.findOne({_id: quizInstance_id});
  var currentUserId = Meteor.userId();
  var currentQuestion = quizInstance.currentQuestionIndex;
  var filter = {user_id : currentUserId,
                question_id : currentQuestion,
                quizInstance_id : quizInstance._id};
  var answered = Answered.findOne(filter);
  if(!answered){
    return false;
  }
  return answered.value == answer_id;
});
Template.registerHelper('answeredCorrectly',function(quizInstance_id)
{
  var quizInstance = QuizInstances.findOne({_id: quizInstance_id});
  var currentUserId = Meteor.userId();
  var currentQuestionIndex = quizInstance.currentQuestionIndex;
  var filter = {user_id : currentUserId,
                question_id : currentQuestionIndex,
                quizInstance_id : quizInstance._id};
  var answer = Answered.findOne(filter);
  if(!answer){
    return false;
  }
  return answer.correct;
});
Template.registerHelper('getQuizScore',function(_id)
{
  console.log(_id);
  var answers = Answered.find({quizInstance_id: _id});
  console.log(answers);
  return answers;

});
