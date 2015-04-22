
Router.route('/', {
  name: '/home',
  action: function () {
    this.render('base');
    this.render('home');
  }
});

Router.route('/login/', {
  name: '/login',
  action: function () {
    this.render('base');
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
  action: function () {
    this.render('base');
    this.render('lobby');
  }
});
// add here other routes
Router.route('/student/quiz/:_id?', {
  action: function () {
    this.render('base');
    this.render('studentquiz');
  }
});



// catchall route
Router.route('/(.*)', function () {
    this.redirect('/');
});
