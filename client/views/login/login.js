
if (Meteor.isClient) {
  // This code only runs on the client
	Template.body.helpers({
	});

	  // Inside the if (Meteor.isClient) block, right after Template.body.helpers:
	Template.body.events({
	});
	// Define a helper to check if the current user is the task owner
	Accounts.ui.config({
	  passwordSignupFields: "USERNAME_ONLY"
	});
	Template.loginButtons.rendered = function()
	{
		Accounts._loginButtonsSession.set('dropdownVisible', true);
		$('.login-close-text').remove();
	};
}

Meteor.methods({
});

if (Meteor.isServer) {
}