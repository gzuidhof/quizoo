Template.addAnswer.events({

  'submit form': function(event, template){
    event.preventDefault();

    var text = event.target.answerText.value;
    var question_id = template.data.question_id;

    Meteor.call('insertAnswer', question_id, text);
    event.target.answerText.value = "";

    return false;
  },

  'click .flip-correct': function(event, template){
    event.preventDefault();
    var correct = template.data.correct;
    console.log(correct);
    correct = !correct;
    console.log(correct);

    Session.set('correct', template.data.correct)



    Meteor.call()
    return false
  }
})
