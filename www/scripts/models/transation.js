define(['backbone'], function(Backbone) {
	
  var Transation = Backbone.Model.extend({
    rootUrl: default_url + '/transactions.json',
  	defaults: {
      id_client_amount: ' ',
      seconds_amount: ' ',
      seconds_update: ' ',
      id_client: ' ',
      dh_rx: ' ',
      id_payment_method: ' ',
      id_cod_movement: ' ',
      dh_ins: ' ',
      id_card: ' ',
      id_type_status_checkin: ' '
  	},
  });

  return Transation;
});











