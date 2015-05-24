Questions = new Mongo.Collection('questions');

if (Meteor.isClient) {
  Meteor.subscribe("questions");
};

if (Meteor.isServer) {
  Meteor.publish("questions", function () {
    return Questions.find();
  });
};
