define(['backbone', 'models/transation'], function(Backbone, Transation) {
	
  var TransationHistory = Backbone.Model.extend({
    model: Transation,
    url: default_url+'/transactions.json'
     });

  return TransationHistory;
});




