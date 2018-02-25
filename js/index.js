'use strict';



var slider = document.getElementById('range');
var output = document.getElementById('number');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};






function oneToFour() {
  var returnOne = 'Wow, that sounds tough.';
}

function fiveToSeven() {
  var returnFive = 'How awful!';
}

function eightToTen() {
  var returnEight = 'Ok seriously, this is not ok.';
}



var scaleResponse = document.getElementById('scaleResponse');

function createResponse(event) {
  var scaleValue = event.target.range.value;


}

scaleResponse.addEventListener('submit', (createResponse));