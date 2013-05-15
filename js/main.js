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
  FRONT_TEETH: 0,
  REAR_TEETH: 0,
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
      App.DISCIPLINE = DISCIPLINES[App.STATE];
      App.REAR_TEETH = 0;
      App.FRONT_TEETH = 0;

      App.render();
    }
    return false;
  });

  $('#front').change(function(){
    App.FRONT_TEETH = parseFloat( $(this).val() );
    App.REAR_TEETH = App.fuckItRound(App.rearGivenFront());

    App.render();
  });

  $('#rear').change(function(){
    App.REAR_TEETH = parseFloat( $(this).val() );
    App.FRONT_TEETH = App.fuckItRound(App.frontGivenRear());

    App.render();
  });

};

App.render = function() {
  var keys = Object.keys(DISCIPLINES);
  if (_.indexOf(keys, App.STATE) !== -1) {
    $('#front, #rear').removeAttr('disabled');

    $('#front').val( App.FRONT_TEETH );
    $('#rear').val( App.REAR_TEETH );
  } else {
    $('#front, #rear').attr('disabled', 'disabled');
  }
  // draw_gear(num_teeth, radius, tooth_height, tooth_width_at_bottom, tooth_width_at_top, color, translate_x, translate_y, inner_circle_radius)
  draw_gear(Math.round(App.FRONT_TEETH), App.FRONT_TEETH, 3, 2, 1, "#333", 200, 200, 3, 's1', 1);
  draw_gear(Math.round(App.REAR_TEETH), App.REAR_TEETH, 3, 2, 1, "#333", 300, 200, 3, 's2', 2);
};


App.rearGivenFront = function() {
  return (27 * App.FRONT_TEETH) / App.DISCIPLINE;
};

App.frontGivenRear = function() {
  return (App.DISCIPLINE * App.REAR_TEETH) / 27;
};

App.fuckItRound = function(num) {
  return Math.round(num*10)/10;
};
