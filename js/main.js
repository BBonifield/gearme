$(document).ready(function(){
  App.init();
})


App = {};

App.router = Backbone.Router.extend({
  initialize: function() {
    
  },

  routes: {
    '/' : 'home'
  },

  home: function() {
    console.log('im home');
  }

});

App.init = function() {
  Backbone.history.start({ silent: true });
  Backbone.history.loadUrl(location.pathname);
}
