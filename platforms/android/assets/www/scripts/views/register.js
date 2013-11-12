define([
	'backbone',
	'text!templates/register/index.html'
	], function(Backbone, Template) {
    
  var RegisterView = Backbone.View.extend({
    el: '#container',
  	template: _.template(Template),
    initialize: function(){
      if($.cookie('current_user') == 'false'){
        window.location.href = "#back";
      }
    },
    render: function() {
      this.$el.html( this.template() );
    },

    events: {
      'click': "alertAe"
    },

    alertAe: function(e){
      
    },

  });

  return RegisterView;
});