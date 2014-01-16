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
      window.location.href = "#sign_in"
    },

    events: {
      "submit form": "sign_in"
    },
    

    sign_in: function(e){
      e.preventDefault();
        $.ajax({
          beforeSend: function(){
            $('#modal').show()
          },
          complete: function(data){
            $('#modal').hide()
            $.get(default_url+'/auth').success(function(auth){
              if (auth != true) {
                window.location.href = "#sign_in"
                alert("usuario ou senha incorretos");
              }
              else{
                window.location.href = "#back"
              };
            })
            
          },
          type: "POST",
          contentType: "application/json;charset=utf-8",
          url: default_url+'/users/sign_in.json',
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