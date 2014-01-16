define([
	'backbone',
	'text!templates/qrcode/index.html',
  'views/login',
  'qrcode',
	], function(Backbone,Template, Login) {

  var QrcodeView = Backbone.View.extend({
    el: '#container',
  	template: _.template(Template),

    initialize:function(){
      $.get(default_url+'/auth').success(function(data){
        if (data == true) {
          window.location.href = "#qrcode"
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

  return QrcodeView;
});