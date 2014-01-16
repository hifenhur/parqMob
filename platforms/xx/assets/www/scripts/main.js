var default_url = 'http://172.16.1.22:3000';

require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery.min',
    'underscore': 'vendor/underscore-amd/underscore-min',
    'backbone': 'vendor/backbone-amd/backbone-min',
    'text': 'vendor/requirejs-text/text',
    'jquery-cookie': 'vendor/jquery.cookie/jquery.cookie',
    'sugar': 'vendor/sugarjs/sugarjs'
  }
});
require([
        'backbone',
        'views/home',
        'routers/route',
        'models/user',
        'jquery',
        'jquery-cookie',
        'sugar'
], function (Backbone ,HomeView, Route, User) {
        /*jshint nonew:false*/
        // Initialize routing and start Backbone.history()
        var route = new Route();
        
       	Backbone.history.start();
        var home_view = new HomeView(
            );
        home_view.render();
        
});