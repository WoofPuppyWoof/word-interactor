var textfield;
var replace;
var output;
var submit;

var submitPressed = 0;

function setup() {
  console.log(this);
  noCanvas();
  textfield = select("#input");
  replace = select("#replace");
  output = select('#output');
  submit = select("#submit");
  submit.mousePressed(checkSubmitted);
}

function highlight() {
  console.log(this.html());
  this.html(replace.value());
  var c = color(random(255), random(255), random(255));
  this.style('background-color', c);

  //var s = this.html().replace();

  //console.log(this);
  //console.log('hover');
}

function newText() {
  var s = textfield.value();

  var words = s.split(/(\W+)/);
  console.log(words);
  for (var i = 0; i < words.length; i++) {

    var span = createSpan(words[i]);
    span.parent(output);

    if (!/\W+/.test(words[i])) {
      //span.style('background-color', color(random(255), 0, random(255))); // random color
      span.mouseOver(highlight);
      span.mousePressed(highlight);
    }
  }
  //console.log(words);
}

function checkSubmitted() {
  if (submitPressed == 0) {
    newText();
    submitPressed = 1;
  }
}
