define(['backbone'], function(Backbone) {
	
  var User = Backbone.Model.extend({
    url: default_url+'/edit_user.json',
    defaults:{
      client_id: null, 
      created_at: '', 
      email: '', 
      id_user: '', 
      id_usuario: '', 
      login: '', 
      presentation: '', 
      status: '',
      phones: []
    }
  });

  return User;
});