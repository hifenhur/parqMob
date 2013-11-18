define(['backbone', 'models/transation'], function(Backbone, Transation) {
	
  var TransationHistory = Backbone.Collection.extend({
    model: Transation,
    url: default_url+'/validations.json'
     });

  return TransationHistory;
});




