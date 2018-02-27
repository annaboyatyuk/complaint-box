'use strict';



var allpictures = [];


function Pictures(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allpictures.push(this);
}


new Pictures('annoy gif', '../keywordImg/annoyAnimation.gif');
new Pictures('annoy meme', '../keywordImg/annoyMeme.jpg');
new Pictures('annoy quote', '../keywordImg/annoyQuote.jpg');
new Pictures('else gif', '../keywordImg/elseAnimation.gif');
new Pictures('else meme', '../keywordImg/elseMeme.jpg');
new Pictures('else quote', '../keywordImg/elseQuote.jpg');
new Pictures('sick gif', '../keywordImg/sickAnimation.gif');
new Pictures('sick meme', '../keywordImg/sickMeme.jpg');
new Pictures('sick quote', '../keywordImg/sickQuote.jpg');
new Pictures('traffic gif', '../keywordImg/trafficAnimation.gif');
new Pictures('traffic meme', '../keywordImg/trafficMeme.jpg');
new Pictures('traffic quote', '../keywordImg/trafficQuote.jpg');
new Pictures('weather gif', '../keywordImg/weatherAnimation.gif');
new Pictures('weather meme', '../keywordImg/weatherMeme.jpg');
new Pictures('weather quote', '../keywordImg/weatherQuote.jpg');
new Pictures('work gif', '../keywordImg/workAnimation.gif');
new Pictures('work meme', '../keywordImg/workMeme.jpg');
new Pictures('work quote', '../keywordImg/workQuote.jpg');




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

  var responseImage = document.getElementById('responseImage');
  var imgFile = document.createElement('img');

  for(var i = 0; i < allpictures.length; i++) {
    if(imgPathName === allpictures[i].filepath) {
      imgFile.src = allpictures[i].filepath;
      responseImage.appendChild(imgFile);
    }
  }

}
renderComplaintImage();

