
if (Meteor.isClient) {
  // Define a helper to check if the current user is the task owner
	Accounts.ui.config({
	  passwordSignupFields: "USERNAME_ONLY"
	});
}
