define([
	'backbone',
  'models/session',
	'text!templates/home/index.html',
  'views/login'
	], function(Backbone,Session ,Template, Login) {

  var HomeView = Backbone.View.extend({
    el: '#container',
  	template: _.template(Template),

    initialize:function(){
      $.get(default_url+'/auth').success(function(data){
        if (data == true) {
          window.location.href = "#back"
        }
        else{
          login = new Login();
          login.render();
        };
      })
    },

    render: function() {
      this.$el.html( this.template() );
    },

    

  });

  return HomeView;
});