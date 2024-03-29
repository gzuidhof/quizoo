Router.route('/', {
  name: '/home',
  layoutTemplate: 'base',
  action: function () {
    var quizInstances = QuizInstances.find({});
    this.render('home',{data: {quizInstances: quizInstances}});
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

Router.route('/403', {
  name: '/403',
  layoutTemplate: 'base',
  action: function () {
    this.render('403');
  }
});



// we want to be sure that the user is logging in
// for all routes but login
Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('/login');
    } else {
        // required by Iron to process the route handler
        var routeName = Router.current().route.getName();
        if (Router.isAllowedAccess(Meteor.user(), routeName)) {
          this.next();
        }
        else {
          this.layout('base');
          this.render('/403');
        }
    }
}, {
    except: ['/login']
});

Router.isAllowedAccess = function(user, route){
    if (route.indexOf('student') > -1) {
      return (Roles.userIsInRole(user, ['student']));
    }
    else if (route.indexOf('teacher') > -1) {
      return (Roles.userIsInRole(user, ['teacher']));
    }
    return true;
}

Router.route('/lobby/:_id',function() {
  if(QuizInstances.findOne({_id: this.params_id}))
  {
    this.layout('base');
    this.render('lobby',{data: {quiz_id:this.params._id}});
  }
  else {
    this.layout('base');
    this.render('teacherQuiz');
  }
});

Router.route('/student/quiz', function(){
  var quizInstance = QuizInstances.findOne({status: {$in: [0,1,2,3]}});
  this.layout('base');
  this.render('studentQuiz', {data: {quizInstance : quizInstance}})
});

Router.route('/teacher/editquiz/:_id', function() {

  var quiz = Quizzes.findOne({_id: this.params._id});
  this.layout('base');
  this.render('editQuiz', {data: {quiz:quiz}});
});

Router.route('/teacher/quiz', function() {
  var quizInstance = QuizInstances.findOne({status: {$in: [0,1,2,3]}});
  this.layout('base')
  if(quizInstance){
    this.render('teacherQuiz',{data:{quizInstance: quizInstance}});
  }
  else {
    var quizzes = Quizzes.find({});
    this.render('startQuiz',{data:{quizzes: quizzes}});
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


Router.route('/profile', {
  layoutTemplate: 'base',
  action: function () {
    this.render('studentProfile');
  }
});

Router.route('/teacher/quizend', {
  layoutTemplate: 'base',
  action: function () {
    this.render('quizEnd');
  }
});

Router.route('/teacher/teams', {
  layoutTemplate: 'base',
  action: function () {
    this.render('teams');
  }
});


Router.route('/student/fancypants', {
  layoutTemplate: 'base',
  action: function () {
    this.render('answered');
  }
});


// catchall route
Router.route('/(.*)', function () {
    this.redirect('/');
});
