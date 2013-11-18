define([
	'backbone',
	'text!templates/edit/index.html',
  'views/login'
	], function(Backbone,Template, Login) {

  var EditView = Backbone.View.extend({
    el: '#container',
  	template: _.template(Template),

    initialize:function(){
      $.get(default_url+'/auth').success(function(data){
        if (data == true) {
          window.location.href = "#edit"
        }
        else{
          login = new Login();
          login.render();
        };
      })
    },

    render: function() {
      this.$el.html( this.template(this.model.toJSON()) );
    },

    

  });

  return EditView;
});