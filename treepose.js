let video;
let poseNet;
let pose;
let skeleton;


function setup(){
  //makes canvas
  createCanvas(640, 480);
  //creates video below canvas
  video = createCapture(VIDEO);
  //creates video and hides 
  video.hide();
  //check to see if ml5 library is working
  //console.log(ml5);
  //load poseNet model and connect to video
  poseNet = ml5.poseNet(video, modelReady);
  //when pose is detected, gotPoses function will be called
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses){
  if(poses.length > 0){
    //gets any pose
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelReady(){
  console.log('model ready');
}

function draw(){
  background(100);
  //draws video at position (0,0)
  image(video, 0, 0);
  
  if(pose){
    //you can write code for each keypoint if you want certain points to be different sizes and colors
    /*fill(255, 0, 0);
    ellipse(pose.nose.x, pose.nose.y, 40);
    fill(0, 0, 255);
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 30);
    fill(0, 0, 255);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 30);*/
    
    //you can draw all 17 points by looping through all of them and getting the keypoints
    for(let i = 0; i < pose.keypoints.length; i++){
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill (255, 255, 255);
      ellipse(x, y, 10, 10);
    }
    //draws a line between the x and y of each points
    for(let i = 0; i < skeleton.length; i++){
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(0);
      stroke(255);
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
    
    //if y position of keypoint 9, which is point for left wrist is more than 240; it will tell user to raise their hand
    //else, tell user good job for raising their left hand 
    if(pose.keypoints[9].position.y > 220) {
      document.getElementById('left').innerHTML = "LEFT HAND: RAISE HIGHER!!";
    }else if(pose.keypoints[9].position.y < 160) {
      document.getElementById('left').innerHTML = "LEFT HAND: LOWER!!";
    }else{
      document.getElementById('left').innerHTML = "LEFT HAND: PERFECT";
    }

    if(pose.keypoints[10].position.y > 220) {
      document.getElementById('right').innerHTML = "RIGHT HAND: RAISE HIGHER!!";
    }else if(pose.keypoints[10].position.y < 160) {
      document.getElementById('right').innerHTML = "RIGHT HAND: LOWER!!";
    }else{
      document.getElementById('right').innerHTML = "RIGHT HAND: PERFECT";
    }

    if(pose.keypoints[13].position.y > 340) {
      document.getElementById('leftankle').innerHTML = "LEFT ANKLE: RAISE HIGHER!!";
    }else if(pose.keypoints[13].position.y < 290) {
      document.getElementById('leftankle').innerHTML = "LEFT ANKLE: LOWER!!";
    }else{
      document.getElementById('leftankle').innerHTML = "LEFT ANKLE: PERFECT. SUGOI. BIEN.";
    }
  }
    
}