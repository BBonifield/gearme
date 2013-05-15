$(function() {

function makeSVG(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs) {
    el.setAttribute(k, attrs[k]);
  }
  return el;
}

//  <g transform="translate(50,50)">

var translate = makeSVG('g', {
  id: "g",
  transform: "translate(50, 50)"
});

var translate2 = makeSVG('g', {
  id: "g2",
  transform: "translate(0, 0)"
});

var circle = makeSVG('circle', {
  cx: 0, cy: 0, r:40,
  stroke: 'black',
  'stroke-width': 2,
  fill: 'red'
});

document.getElementById('s').appendChild(translate);
document.getElementById('g').appendChild(translate2);

var num_teeth = 20;

var i;
for (i = 0; i < num_teeth; i++) {
  var angle = i * 360 / num_teeth;
  var tooth = makeSVG('rect', {
    width: 10,
    height: 10,
    x: 0,
    y: -45,
    stroke: 'black',
    'stroke-width': 2,
    fill: 'red',
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
  dur: "4s",
  repeatCount: "indefinite"
});

document.getElementById('g2').appendChild(spinning);
document.getElementById('g').appendChild(translate2);
document.getElementById('g').appendChild(circle);

circle.onmousedown= function() { alert('hello'); };

});
