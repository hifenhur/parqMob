define([
	'backbone',
  'models/session',
	'text!templates/home/index.html',
	], function(Backbone,Session ,Template) {

  var HomeView = Backbone.View.extend({
    el: '#container',
  	template: _.template(Template),
    events:{
      "click .sign_out": "signOut"
    },
    initialize:function(){
      $.get(default_url+'/auth').success(function(data){
        if (data == true) {
          window.location.href = "#back"
        }
        else{
          window.location.href = "#sign_in"
        };
      })
    },

    render: function() {
      this.$el.html( this.template() );
    },

    signOut: function(){
      $.ajax({
          beforeSend: function(){
            console.log('carregando...')
          },
          complete: function(data){
            console.log('backkkkkk');
            window.location.href = "#sign_in"
          },
          type: "DELETE",
          contentType: "application/json;charset=utf-8",
          url: default_url+'/users/sign_out',
          data: JSON.stringify({user:{ 
            login: $('#login').val(), 
            password: $('#password').val(),
            remember: true,
            },
          xhrFields:{'withCredentials': true}
          }),
          dataType: "json"

      });       
    }

  });

  return HomeView;
});