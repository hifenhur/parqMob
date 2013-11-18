define([
	'backbone',
  'models/session',
	'text!templates/history/transation.html',
  'views/login'
	], function(Backbone,Session ,Template, Login) {

  var TransationView = Backbone.View.extend({
    el: '#history_list',
  	template: _.template(Template),
    initialize:function(){
      $.get(default_url+'/auth').success(function(data){
        if (data != true) {
          var login = new Login();
          login.render();
        };
      })
    },

    render: function() {
      this.$el.append(this.template(this.model.toJSON()));
    },


  });

  return TransationView;
});