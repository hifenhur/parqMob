define([
	'backbone',
  'models/session',
	'text!templates/history/index.html',
  'views/login'
	], function(Backbone,Session ,Template, Login) {

  var CheckinView = Backbone.View.extend({
    el: '#container',
  	template: _.template(Template),
    initialize:function(){
      $.get(default_url+'/auth').success(function(data){
        if (data != true) {
          login = new Login();
          login.render();
        };
      })
    },

    render: function() {
      this.$el.html( this.template() );
    },


  });

  return CheckinView;
});