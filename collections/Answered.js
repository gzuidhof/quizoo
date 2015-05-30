Answered = new Mongo.Collection('answered');

if (Meteor.isClient) {
  Meteor.subscribe("answered");
};

if (Meteor.isServer) {
  Meteor.publish("answered", function () {
    return Answered.find();
  });
};
