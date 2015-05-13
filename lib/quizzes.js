Quizzes = new Mongo.Collection('quizzes')

if (Meteor.isClient) {
  Meteor.subscribe("quizzes");
}

if (Meteor.isServer) {
  Meteor.publish("quizzes", function () {
    return Quizzes.find();
  });
}
