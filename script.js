const video = document.getElementById('video');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const progressBarRunner = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

const playIconHTML =  '<i class="fa fa-play fa-2x"></i>';
const pauseIconHTML = '<i class="fa fa-pause fa-2x"></i>';

function toggleVideoStatus(){
  video.paused ? video.play() : video.pause();
}

function updatePlayPauseIcon(){
  playButton.innerHTML = video.paused ? playIconHTML : pauseIconHTML;
}

function updateProgressBar(){
  progressBarRunner.value = (video.currentTime / video.duration) * 100;

  let minutes = Math.floor(video.currentTime / 60);
  if(minutes < 10){
    minutes = '0' + String(minutes);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if(seconds < 10){
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

function stopVideo(){
  video.currentTime = 0;
  video.pause();
}

function setVideoProgress(){
  video.currentTime = (+progressBarRunner.value * video.duration) / 100;
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayPauseIcon);
video.addEventListener('play', updatePlayPauseIcon);
video.addEventListener('timeupdate', updateProgressBar);

playButton.addEventListener('click', toggleVideoStatus);

stopButton.addEventListener('click', stopVideo);

progressBarRunner.addEventListener('change', setVideoProgress);

