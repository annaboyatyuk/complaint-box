'use strict';



var slider = document.getElementById('range');
var output = document.getElementById('number');
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
};
/*
'key1': '[1, 4, 6, 7]'
var ratings = localStorage.getItem('key1');
  //ratings  = '[1, 4, 6, 7]'
  ratings = JSON.parse(ratings);
  //ratings = [1, 4, 6, 7]
  ratings.push(event.target.range.value);

*/

//richards work
function submitComplaint(event){
  event.preventDefault();
  var complaintScore = event.target.range.value;
  /*
  if(localStorage.getItem('newcomplaintscore')){
    ratings = localStorage.getItem('newcomplaintscore');
    ratings = JSON.parse(ratings);
  }
  else{
    ratings = [];
  }
  ratings.push(event.target.range.value);
  */
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

}
