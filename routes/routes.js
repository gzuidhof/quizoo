// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
  }
});
Router.route('/user/', {
  name: '/user_login',
  action: function () {
    this.render('user');
  }
});