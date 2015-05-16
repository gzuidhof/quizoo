Router.route('/', {
  name: '/home',
  layoutTemplate: 'base',
  action: function () {
    this.render('home');
  }
});

Router.route('/login/', {
  name: '/login',
  layoutTemplate: 'base',
  action: function () {
	this.render('home');
    this.render('login');
  }
});

// we want to be sure that the user is logging in
// for all routes but login
Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
      console.log("awrooooo");
        this.redirect('/login');
    } else {
        // required by Iron to process the route handler
        this.next();
    }
}, {
    except: ['/login']
});

Router.route('/lobby', {
  name: '/lobby',
  layoutTemplate: 'base',
  action: function () {
    this.render('lobby');
  }
});

Router.route('/student/quiz/:_id?', {
  layoutTemplate: 'base',
  action: function () {
    this.render('studentQuiz');
  }
});

Router.route('/teacher/editquiz/:_id', function() {

  var quiz = Quizzes.findOne({_id: this.params._id});
  var questions = Questions.find({quiz_id: this.params._id});

  this.layout('base');
  this.render('editQuiz', {data: {quiz:quiz, questions:questions}});
});

Router.route('/teacher/quiz', {
  layoutTemplate: 'base',
  action: function () {
    this.render('teacherQuiz');
  }
});

Router.route('/teacher/quizanswer', {
  layoutTemplate: 'base',
  action: function () {
    this.render('quizAnswer');
  }
});

Router.route('/teacher/dashboard', {
  layoutTemplate: 'base',
  action: function () {
    this.render('teacherDashboard');
  }
});


Router.route('/student/powers', {
  layoutTemplate: 'base',
  action: function () {
    this.render('powers');
  }
});





// catchall route
Router.route('/(.*)', function () {
    this.redirect('/');
});
