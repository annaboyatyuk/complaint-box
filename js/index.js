'use strict';

var slider = document.getElementById('range');
var output = document.getElementById('number');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};


function submitComplaint(event){
  event.preventDefault();
  var complaintScore = event.target.range.value;

  complaintScore = JSON.stringify(complaintScore);
  localStorage.setItem('newcomplaintscore',complaintScore);
  console.log('store data');
  console.log(localStorage.getItem('newcomplaintscore'));
  window.location = 'complaint.html';
}

window.onload = function(){
  console.log('check if it loads');

  var complaintForm = document.getElementById('complaintform');
  complaintForm.addEventListener('submit',submitComplaint);
};

