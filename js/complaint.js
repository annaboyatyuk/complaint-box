'use strict';

/*Key Words:
1.  Work, boss, manager, job
2.  traffic
3.  sick, feel good, 
4.  annoy
5.  cold, hot, warm, freezing, humid, rain
*/ 
var complaintReason = ['annoy', 'sick', 'traffic', 'weather', 'work'];
function inputComplaintDetails(event){
    event.preventDefault();
var complaintDetails = event.target.complaint.value.toLowerCase();
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
}


