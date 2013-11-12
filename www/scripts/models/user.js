define(['backbone'], function(Backbone) {
	
  var User = Backbone.Model.extend({
    rootUrl: default_url+'/users',
  	defaults: {
      name: '',
      email: '',
  		login: '',
  		password: '',
      password_confirmation: '',
  	},
  });

  return User;
});