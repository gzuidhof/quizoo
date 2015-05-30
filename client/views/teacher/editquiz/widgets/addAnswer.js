Template.addAnswer.events({
  'submit form': function(event, template){
    event.preventDefault;

    var text = event.target.answerText.value;
    var question_id = template.data.question._id;
    console.log(question_id);

    Meteor.call('insertAnswer', question_id, text)

    return false;
  }
})