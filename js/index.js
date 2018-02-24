'use strict';



var slider = document.getElementById('range');
var output = document.getElementById('number');
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
};
