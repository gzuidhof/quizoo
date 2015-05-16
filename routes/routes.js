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
  var quizInstance = QuizInstances.findOne({status: {$not: 4}});
  this.layout('base');
  this.render('studentQuiz', {data: {quizInstance : quizInstance}})
});

Router.route('/teacher/editquiz/:_id', function() {

  var quiz = Quizzes.findOne({_id: this.params._id});
  this.layout('base');
  this.render('editQuiz', {data: {quiz:quiz}});
});

Router.route('/teacher/quiz', function() {
  var quizInstance = QuizInstances.findOne({status: { $not: 4 }});
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




// catchall route
Router.route('/(.*)', function () {
    this.redirect('/');
});
