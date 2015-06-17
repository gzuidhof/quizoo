Template.editAnswer.events({

    'click .remove-answer': function(event, template){
    event.preventDefault();
    question_id = template.data.question_id;
    answer_id = template.data.answer._id;

    Meteor.call('removeAnswer', question_id, answer_id)


    return false;
  },

  'click .flip-correct': function(event, template){
    event.preventDefault();
    question_id = template.data.question_id;
    answer_id = template.data.answer._id;
    answer = template.data.answer.value;
    correct = template.data.answer.correct;
    correct = !correct;

    Meteor.call('updateAnswer', question_id, answer_id, {value:answer, _id:answer_id, correct:correct});

    return false;

  }

})
