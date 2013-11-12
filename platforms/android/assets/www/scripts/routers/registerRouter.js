define([
  'backbone',
  'views/register',
  ], function(Backbone, RegisterView){
  var registerRouter = Backbone.Router.extend({
    routes: { 
      "register": 'registrar'
     },
    
    registrar: function(){ 
      var registerView = new RegisterView();
      registerView.render();
     },

  })
  return registerRouter
})