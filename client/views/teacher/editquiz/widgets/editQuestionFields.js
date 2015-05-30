Template.editQuestionFields.events({
  'click .remove-question': function(event, template) {
    event.preventDefault();
    //var question = template.data;
    var question_id = template.data.question._id;
    var quiz_id = template.data.quiz._id;

    Meteor.call('removeQuestion', quiz_id, question_id);

    return false;

  },

  'submit form': function(event, template){
    event.preventDefault();

    var questionText = event.target.questionAsked.value;
    var question_id = template.data.question._id;
    Meteor.call('updateQuestion', question_id, {text:questionText})

    var answers = template.data.question.answers;
    console.log(answers)
    for (var i = 0 ; i < answers.length ; i++ ){
      var answer_id = answers[i]._id;
      console.log(answer_id)
      var answer = event.target[answer_id].value;
      var ifCorrect = answers[i].correct;
      console.log(answer);
      Meteor.call('updateAnswer', question_id, answer_id, {value:answer, _id:answer_id, correct:ifCorrect});
    }


    return false;
  }

});
