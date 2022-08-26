//
let playerArea = document.querySelector(".myplayer");
let media = playerArea.querySelector("video");
let controls = playerArea.querySelector(".myplayer__controls");
let play = controls.querySelector(".play");
let rewind = controls.querySelector(".rewind");
let forward = controls.querySelector(".forward");
let fullscreen = controls.querySelector(".fullscreen");
let volume = controls.querySelector(".volume i");
let currentTime = controls.querySelector(".currentTime");
let videoTime = controls.querySelector(".videoTime");

//
media.addEventListener("timeupdate", function() {
    let min = Math.floor(media.currentTime / 60);
    let sec = Math.floor(media.currentTime - min * 60);
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    currentTime.textContent = `${min}:${sec}`;
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

function togglePlayIcon() {
    let icon = controls.querySelector(".play i");
    icon.classList.toggle("ion-md-pause");
    icon.classList.toggle("ion-md-play");
}

function getvideoTime() {
    let min = Math.floor(media.duration / 60);
    let sec = Math.floor(media.duration - min * 60);
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    videoTime.textContent = `${min}:${sec}`;
}