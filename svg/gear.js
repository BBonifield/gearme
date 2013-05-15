function makeSVG(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs) {
    el.setAttribute(k, attrs[k]);
  }
  return el;
}

function draw_gear(num_teeth, radius, tooth_height, tooth_width_at_bottom, tooth_width_at_top, color, translate_x, translate_y, inner_circle_radius) {
  var translate = makeSVG('g', {
    id: "g",
    transform: "translate(" + translate_x + ", " + translate_y + ")"
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
    cx: 0, cy: 0, r:inner_circle_radius,
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
}
