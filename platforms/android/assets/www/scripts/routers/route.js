define([
  'backbone',
  'views/login',
  'views/register',
  'views/home',
  ], function(Backbone, LoginView, RegisterView, HomeView){
  var route = Backbone.Router.extend({
    routes: {
      "register": 'registrar', 
      "sign_in": 'loginPage',
      'back': 'backPage'
     },

     loginPage: function(){
      var loginView = new LoginView();
      loginView.render();
     },

     backPage: function(){
      var homeView = new HomeView();
      homeView.render();
     },

     registrar: function(){ 
      var registerView = new RegisterView();
      registerView.render();
     },

     
  })
  return route
})

