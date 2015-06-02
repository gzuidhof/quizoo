var users = [
    {username: 'admin', name:"admin",roles:['admin','teacher']},
    {username: 'superadmin', name:"superadmin",roles:['admin','teacher', 'student']},
    {username: 'luc', name:"Scrubmastert",roles:['admin','teacher', 'student']},
    {username: 'tom', name:"Tom",roles:['admin','teacher', 'student']},
    {username: 'guido', name:"Guido",roles:['admin','teacher', 'student']},
    {username: 'thomas', name:"Thomas",roles:['admin','teacher', 'student']},
  ];

_.each(users, function (user) {

  var id;
  if (!Meteor.users.findOne({username: user.username})) {
    id = Accounts.createUser({
      username: user.username,
      password: "regenton",
      profile: { name: user.name }
    });

    if (user.roles.length > 0) {
      // Need _id of existing user record so this call must come
      // after `Accounts.createUser` or `Accounts.onCreate`
      Roles.addUsersToRoles(id, user.roles);
    }
  }
});





Accounts.validateNewUser(function (user) {
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['admin', 'teacher'])) {
      return true;
    }

    throw new Meteor.Error(403, "Not authorized to create new users");
});

Meteor.methods({
  'removeAll': function(passwd) {
    if (passwd == 'nakken') {
      Quizzes.remove({});
      QuizInstances.remove({});
      Questions.remove({});

      return "Oke..";
    }
  }
});
