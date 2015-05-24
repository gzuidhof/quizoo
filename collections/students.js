Students = new Mongo.Collection('students');

if (Meteor.isClient) {
  Meteor.subscribe("students");
};

if (Meteor.isServer) {
  Meteor.publish("students", function () {
    return Students.find();
  });
};
