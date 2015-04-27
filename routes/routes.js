
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
// add here other routes
Router.route('/student/quiz/:_id?', {
  layoutTemplate: 'base',
  action: function () {
    this.render('studentquiz');
  }
});

// add here other routes
Router.route('/teacher/editquiz', {
  layoutTemplate: 'base',
  action: function () {
    this.render('editquiz');
  }
});




// catchall route
Router.route('/(.*)', function () {
    this.redirect('/');
});
