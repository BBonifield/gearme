$(function() {

var num_teeth = 42;
var radius = 40;
var tooth_height = 3;

num_teeth = 40;
radius = num_teeth;

var tooth_width_at_bottom = 2;
var tooth_width_at_top = 1;


function makeSVG(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs) {
    el.setAttribute(k, attrs[k]);
  }
  return el;
}

//  <g transform="translate(50,50)">

var color = "#333";

var translate = makeSVG('g', {
  id: "g",
  transform: "translate(50, 50)"
});

var translate2 = makeSVG('g', {
  id: "g2",
  transform: "translate(0, 0)"
});

var outer_circle = makeSVG('circle', {
  cx: 0, cy: 0, r:radius,
  stroke: 'black',
  'stroke-width': 0,
  fill: color
});

var inner_circle = makeSVG('circle', {
  cx: 0, cy: 0, r:5,
  stroke: 'black',
  'stroke-width': 2,
  fill: 'white'
});

document.getElementById('s').appendChild(translate);
document.getElementById('g').appendChild(translate2);

var i;
for (i = 0; i < num_teeth; i++) {
  var angle = (i * 360 / num_teeth);
  var tooth = makeSVG('polygon', {
    points: "" + -tooth_width_at_bottom + "," + -radius + " " + -tooth_width_at_top + "," + (-radius - tooth_height) + " " + tooth_width_at_top + "," + (-radius - tooth_height) +" " + tooth_width_at_bottom + "," + -radius,
    stroke: 'black',
    'stroke-width': 1,
    fill: color,
    transform: "rotate(-" + angle + ")"
  });
  var tooth2 = makeSVG('rect', {
    width: 10,
    height: 10,
    x: 0,
    y: -45,
    stroke: 'black',
    'stroke-width': 2,
    fill: color,
    transform: "rotate(-" + angle + ")"
  });
  document.getElementById('g2').appendChild(tooth);
}

var spinning = makeSVG('animateTransform', {
  attributeType: "xml",
  attributeName: "transform",
  type: "rotate",
  from: "0 0 0",
  to: "360 0 0",
  dur: "20s",
  repeatCount: "indefinite"
});

document.getElementById('g2').appendChild(spinning);
document.getElementById('g').appendChild(translate2);
document.getElementById('g').appendChild(outer_circle);
document.getElementById('g').appendChild(inner_circle);

circle.onmousedown= function() { alert('hello'); };

});
