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
  var ratings;
  if(localStorage.getItem('ratingList')){
    ratings = localStorage.getItem('ratingList');
    ratings = JSON.parse(ratings);
  }
  else{
    ratings = [];
  }
  ratings.push(event.target.range.value);
  ratings = JSON.stringify(ratings);
  localStorage.setItem('ratingList',ratings);
  console.log('store data');
  console.log(localStorage.getItem('ratingList'));
  window.location = 'complaint.html';
}

window.onload = function(){
  console.log('check if it loads');
 var complaintForm = document.getElementById('complaintform');
  complaintForm.addEventListener('submit',submitComplaint); 

}