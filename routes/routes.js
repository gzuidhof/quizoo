// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
  }
});
Router.route('/login/', {
  name: '/login',
  action: function () {
    this.render('login');
  }
});

// we want to be sure that the user is logging in
// for all routes but login
Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
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
    this.render('lobby');
  }
});
// add here other routes

// catchall route
Router.route('/(.*)', function () {
    this.redirect('/');
});