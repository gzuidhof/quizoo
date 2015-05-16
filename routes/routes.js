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

Router.route('/user/quiz', function(){
  //var team = Teams.findOne({participants : Meteor.userId()})
  var quizInstance = QuizInstances.findOne();//{participants : team._id});

  this.layout('base');
  this.render('studentQuiz', {data: {quizInstance : quizInstance}})

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
