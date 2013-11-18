define([
  'backbone',
  'views/login',
  'views/register',
  'views/home',
  'views/history',
  'views/edit',
  'collections/transations_history',
  'models/user'
  ], function(   Backbone,   LoginView,   RegisterView,   HomeView,   HistoryView, EditView, TransationsHistory, User){
  var route = Backbone.Router.extend({
    routes: {
      "register": 'register', 
      "sign_in": 'loginPage',
      'back': 'backPage',
      'history': 'history',
      'sign_out': 'signOut',
      'edit':'edit'
     },

     loginPage: function(){
      var loginView = new LoginView();
      loginView.render();
     },

     backPage: function(){
      var homeView = new HomeView();
      homeView.render();
     },

     edit: function(){
      var user = new User()
      user.fetch({success:function(model){
        var editView = new EditView({model: model})  
        editView.render();
      }});
      
      
     },

     register: function(){ 
      var registerView = new RegisterView();
      registerView.render();
     },

     history: function(){ 
      var transations = new TransationsHistory();
      var historyView = new HistoryView({collection: transations});
      historyView.render();
     },
     signOut: function(){
      if (confirm("Deseja realmente sair?")) {
        $.ajax({
            beforeSend: function(){
              console.log('carregando...')
            },
            complete: function(data){
              window.location.href = "#sign_in"
            },
            type: "DELETE",
            contentType: "application/json;charset=utf-8",
            url: default_url+'/users/sign_out.json',
            dataType: "json"

        }); 
      }
      else{
        window.location.href = "#back"
      }      
    }
     
  })
  return route
})

