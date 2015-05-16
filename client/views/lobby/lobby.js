if (Meteor.isClient)
{
	Meteor.subscribe('userPresence');
	  // This code only runs on the client
	Template.lobby.helpers({
				users: function() { return Meteor.users.find(); }
	});

}

if (Meteor.isServer) {
	Meteor.publish('userPresence', function() {
	  // Setup some filter to find the users your user
	  // cares about. It's unlikely that you want to publish the
	  // presences of _all_ the users in the system.

	  // If for example we wanted to publish only logged in users we could apply:
	  // filter = { userId: { $exists: true }};
		var filter = {};

		var presences = Presences.find(filter,{fields: {state: true, userId: true}});
		console.log(presences);
		console.log('presences');
		return presences;
	});
}
