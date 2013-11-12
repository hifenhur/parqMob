define([
  'backbone',
  'views/login',
  ], function(Backbone, LoginView){
  var loginRouter = Backbone.Router.extend({
    routes: { 
      "back": 'backPage'
     },

     backPage: function(){
      var loginView = new LoginView();
      loginView.render();
     }
  })
  return loginRouter
})