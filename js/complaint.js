'use strict';

var complaintReason = ['annoy', 'sick', 'traffic', 'weather', 'work', 'snow', 'that', 'brother', 'wish', 'sister', 'sibling', 'and', 'job'];
function inputComplaintDetails(event){

  event.preventDefault();
  var complaintDetails = event.target.complaint.value.toLowerCase();//text box

  var reason;
  for(var i = 0; i < complaintReason.length; i++){
    if(complaintDetails.includes(complaintReason[i])){
      reason = complaintReason[i];
      break;
    }
  }
  if(reason === undefined){
    reason = 'else';
  }
  var score = localStorage.getItem('newcomplaintscore');
  score = JSON.parse(score);
  var complaint = {
    complaintScore: score,
    complaintReason: reason
  };
  var complaintList = localStorage.getItem('complaintlist');
  if(complaintList){
    complaintList = JSON.parse(complaintList);
    complaintList.push(complaint);
  }
  else{
    complaintList=[complaint];
  }
  complaintList = JSON.stringify(complaintList);
  console.log('complaint list modified: ' + complaintList);
  localStorage.setItem('complaintlist',complaintList);
  window.location = 'response.html';
}

window.onload = function(){
  console.log('complaint js loaded');
  var complaintTextForm = document.getElementById('complaintForm');
  complaintTextForm.addEventListener('submit', inputComplaintDetails);
};


