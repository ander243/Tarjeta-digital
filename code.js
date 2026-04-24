const imagen = document.getElementById('btnLumalee');
const audio = document.getElementById('audioLumalee');

imagen.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        imagen.style.filter = "brightness(1.2) drop-shadow(0 0 10px blue)"; 
    } else {
        detenerEfecto();
    }
});

function detenerEfecto() {
    audio.pause();
    audio.currentTime = 0; 
    imagen.style.filter = "brightness(1) drop-shadow(0 0 0px transparent)";
}

audio.addEventListener('ended', () => {
    detenerEfecto();
});