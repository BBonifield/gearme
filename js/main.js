$(document).ready(function() {
  App.init();
})

var DISCIPLINES = {
  SPRINT: 96,
  TT: 100,
  ENDURANCE: 91
}

App = {
  DISCIPLINE: 'SPRINT',
  FRONT_TEETH: 50,
  REAR_TEETH: 14
};

App.init = function() {
  App.bindEvents();
}

App.bindEvents = function() {
  
}
