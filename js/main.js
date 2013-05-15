$(document).ready(function() {
  App.init();
})

var DISCIPLINES = {
  SPRINT: 96,
  TT: 100,
  ENDURANCE: 91
};

App = {
  DISCIPLINE: 'SPRINT',
  FRONT_TEETH: null,
  REAR_TEETH: null,
  STATE: null
};

App.init = function() {
  App.bindEvents();
};

App.bindEvents = function() {
  $('#selection a').click(function(e){
    e.preventDefault();
    if ( !$(this).is('.selected') ) {
      $('#selection a').removeClass('selected');
      $(this).addClass('selected');
      App.STATE = $(this).data('state');
      App.REAR_TEETH = null;
      App.FRONT_TEETH = null;

      App.render();
    }
    return false;
  });
};

App.render = function() {
  var keys = Object.keys(DISCIPLINES);
  if (_.indexOf(keys, App.STATE) !== -1) {
    alert('valid state');
  }
};
