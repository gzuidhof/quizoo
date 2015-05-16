Teams = new Mongo.Collection('teams');

if (Meteor.isClient) {
  Meteor.subscribe("teams");
};

if (Meteor.isServer) {
  Meteor.publish("teams", function () {
    return Teams.find();
  });
};
