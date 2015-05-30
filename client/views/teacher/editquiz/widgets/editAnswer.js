Template.editAnswer.events({
  'submit form': function(event, template){
    event.preventDefault();

    var answer_id = template.data.answer._id;
    console.log(event.target)
    console.log(template)
    var text = event.target[answer_id].value;
    var question_id = template.data.question_id;

    console.log(text)

    Meteor.call('updateAnswer', question_id, answer_id, {value:text})


    return false;
  }
})
