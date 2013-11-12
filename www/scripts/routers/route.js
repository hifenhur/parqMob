define([
  'backbone',
  'views/login',
  'views/register',
  'views/home',
  'views/history',
  'collections/transations_history'
  ], function(   Backbone,   LoginView,   RegisterView,   HomeView,   HistoryView,   TransationsHistory){
  var route = Backbone.Router.extend({
    routes: {
      "register": 'register', 
      "sign_in": 'loginPage',
      'back': 'backPage',
      'history': 'history',
     },

     loginPage: function(){
      var loginView = new LoginView();
      loginView.render();
     },

     backPage: function(){
      var homeView = new HomeView();
      homeView.render();
     },

     register: function(){ 
      var registerView = new RegisterView();
      registerView.render();
     },

     history: function(){ 
      var transations = new TransationsHistory();
      var historyView = new HistoryView({collection: transations});
      historyView.render();
     }      

     
  })
  return route
})

