define([
	'backbone',
  'models/session',
	'text!templates/login/index.html',
	], function(Backbone,Session ,Template) {

  var LoginView = Backbone.View.extend({
    el: '#container',
  	template: _.template(Template),

    render: function() {
      this.$el.html( this.template() );
    },

    events: {
      "submit form": "sign_in"
    },
    

    sign_in: function(e){
      e.preventDefault();
        $.ajax({
          beforeSend: function(){
            console.log('carregando...')
          },
          complete: function(data){
            console.log('backkkkkk');
            window.location.href = "#back"
          },
          type: "POST",
          contentType: "application/json;charset=utf-8",
          url: default_url+'/users/sign_in',
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

  return LoginView;
});