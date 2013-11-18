define([
	'backbone',
  'models/session',
	'text!templates/history/index.html',
  'views/login',
  'views/transation'
	], function(Backbone,Session ,Template, Login, TransationView) {

  var CheckinView = Backbone.View.extend({
    el: '#container',
  	template: _.template(Template),
    initialize:function(){
      $.get(default_url+'/auth').success(function(data){
        if (data != true) {
          var login = new Login();
          login.render();
        };
      })
    },

    render: function(){
      self = this
      this.$el.html(this.template)
      var collection = this.collection
      collection.fetch({success: function(){
        console.log(collection.length);
        collection.forEach(self.addOne, this);
      }});
      
      
    },
    addOne: function(model){
      var transationView = new TransationView({model: model});
      transationView.render();
    }
  });

  return CheckinView;
});