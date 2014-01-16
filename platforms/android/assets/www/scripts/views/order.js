define([
	'backbone',
	'text!templates/order/index.html',
  'views/login',
	], function(Backbone,Template, Login) {

  var OrderView = Backbone.View.extend({
    el: '#container',
  	template: _.template(Template),

    initialize:function(){
      $.get(default_url+'/auth').success(function(data){
        if (data == true) {
          window.location.href = "#order"
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

  return OrderView;
});