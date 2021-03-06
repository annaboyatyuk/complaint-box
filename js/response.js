'use strict';


//Render the complaint image by the score and the reason
function renderComplaintImage(){
  var complaintData = localStorage.getItem('complaintlist');
  complaintData = JSON.parse(complaintData);
  console.log(complaintData);
  var imgPathName = '../keywordImg/';
  //get the index number to access the last complaint object in the list
  var lastIndex = complaintData.length-1;
  imgPathName += complaintData[lastIndex].complaintReason;//grabs the the last on the list
  //image path name should now include complaint reason (ex: img/work)
  console.log(imgPathName);
  var score = complaintData[lastIndex].complaintScore;
  if(score < 5){
    imgPathName += 'Quote.jpg';
  }
  else if(score >=5 && score <=7){
    imgPathName+='Meme.jpg';
  }
  else{
    imgPathName+='Animation.gif';
  }
  //image path variable should now have the full path name.
  console.log(imgPathName);
  //adding quotes below response.html
  var imageEl = document.getElementById('complaintimage');
  imageEl.src = imgPathName;
}

renderComplaintImage();
//render

var responseArr = [
  'I\'m sorry.',
  'Wow, that sounds tough.',
  'What a challenge.',
  'Don\'t let it ruin your day.',
  'Lets hope for the best.',
  'Tomorrow is a new day!',
  'Wow! I can\'t believe it!',
  'Ok seriously, this is not ok.',
  'That sounds awful.',
  'That is just ridiculous.',
  'So annoying.'];

var responseText = document.getElementById('responseText');
var showText = document.createElement('p');
var randomIndex = responseArr[Math.floor(Math.random() * responseArr.length)];
showText.textContent = randomIndex;
responseText.appendChild(showText);
console.log(showText);


