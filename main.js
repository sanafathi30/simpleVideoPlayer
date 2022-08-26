//
let playerArea = document.querySelector(".myplayer");
let media = playerArea.querySelector("video");
let controls = playerArea.querySelector(".myplayer__controls");
let play = controls.querySelector(".play");
let rewind = controls.querySelector(".rewind");
let forward = controls.querySelector(".forward");
let fullscreen = controls.querySelector(".fullscreen");
let volumeIcon = controls.querySelector(".volume i");
let currentTime = controls.querySelector(".currentTime");
let videoTime = controls.querySelector(".videoTime");
let timeBar = controls.querySelector(".controls__progressbar-current");
let volumeBar = document.querySelector("#volume_bar");
let volumeProgress = document.querySelector(".volume__progress");

media.volume = 0.5;
//
media.addEventListener("timeupdate", function() {
    getCurrentTime();
    let barlength = Math.floor((media.currentTime / media.duration) * 100);
    timeBar.value = `${barlength}`;
    timeBar.style = ` backgroundColor : linear-gradient(90deg, rgba(230, 126, 34, 1) ${barlength}%, #e1e1e1 0%)`;
});

play.addEventListener("click", function() {
    getvideoTime();
    if (media.paused) {
        togglePlayIcon();
        media.play();
    } else {
        togglePlayIcon();
        media.pause();
    }
});

rewind.addEventListener("click", function() {
    media.currentTime = media.currentTime - 5;
});

forward.addEventListener("click", function() {
    media.currentTime = media.currentTime + 5;
});

timeBar.addEventListener("input", function() {
    media.currentTime = Math.floor((this.value / 100) * media.duration);
});

volumeIcon.addEventListener("click", function() {
    volumeProgress.classList.toggle("active");
});

volumeBar.addEventListener("input", function() {
    media.volume = this.value / 100;
    this.style = `linear-gradient(90deg, rgba(230, 126, 34, 1) ${this.value}%, #e1e1e1 50%)`;
});

fullscreen.addEventListener("click", function() {
    console.log(document.fullscreenElement);
    if (!document.fullscreenElement) {
        if (playerArea.requestFullscreen) {
            playerArea.requestFullscreen();
        } else if (playerArea.mozFullScreenElement) {
            playerArea.mozFullScreenElement();
        } else if (playerArea.msFullscreenElement) {
            playerArea.msFullscreenElement();
        } else if (playerArea.webkitFullscreenElement) {
            playerArea.webkitFullscreenElement();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullscreen) {
            document.mozCancelFullscreen();
        } else if (document.msCancelFullscreen) {
            document.msCancelFullscreen();
        } else if (document.webkitCancelFullscreen) {
            document.webkitCancelFullscreen();
        }
    }
});

function togglePlayIcon() {
    let icon = controls.querySelector(".play i");
    icon.classList.toggle("ion-md-pause");
    icon.classList.toggle("ion-md-play");
}

function getCurrentTime() {
    let min = Math.floor(media.currentTime / 60);
    let sec = Math.floor(media.currentTime - min * 60);
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    currentTime.textContent = `${min}:${sec}`;
}

function getvideoTime() {
    let min = Math.floor(media.duration / 60);
    let sec = Math.floor(media.duration - min * 60);
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    videoTime.textContent = `${min}:${sec}`;
}