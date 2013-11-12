define(['backbone'], function(Backbone) {
	
  var User = Backbone.Model.extend({
    rootUrl: 'http://localhost:3000/users'
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