QuizInstances = new Mongo.Collection('quizInstances');

if (Meteor.isClient) {
  Meteor.subscribe("quizInstances");
};

if (Meteor.isServer) {
  Meteor.publish("quizInstances", function () {
    return QuizInstances.find();
  });
};
