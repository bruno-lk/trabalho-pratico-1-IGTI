window.addEventListener('load', start);

var inputRed = null;
var rangeRed = null;
var inputGreen = null;
var rangeGreen = null;
var inputBlue = null;
var rangeBlue = null;

function start() {
  inputRed = document.querySelector('#inputRed');
  rangeRed = document.querySelector('#rangeRed');

  inputGreen = document.querySelector('#inputGreen');
  rangeGreen = document.querySelector('#rangeGreen');

  inputBlue = document.querySelector('#inputBlue');
  rangeBlue = document.querySelector('#rangeBlue');

  slider();
}

function slider() {
  rangeRed.addEventListener('change', changeRed);
  rangeGreen.addEventListener('change', changeGreen);
  rangeBlue.addEventListener('change', changeBlue);
}

function changeRed(event) {
  inputRed.value = event.target.value;
  changeSquare();
}

function changeGreen(event) {
  inputGreen.value = event.target.value;
  changeSquare();
}

function changeBlue(event) {
  inputBlue.value = event.target.value;
  changeSquare();
}

function changeSquare() {
  var square = document.querySelector('#square');
  square.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
}
