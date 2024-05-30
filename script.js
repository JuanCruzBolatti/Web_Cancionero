function scrollToTop() {
    document.body.scroll({
        top: 0,
        behavior: "smooth"
    });
    document.documentElement.scroll({
        top: 0,
        behavior: "smooth"
    });
}

function getScrollOffsetY(element) {
    var rect = element.getBoundingClientRect();
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}

function scrollTo(element) {
    document.body.scroll({
        top: getScrollOffsetY(element) - 150,
        behavior: "smooth"
    });
    document.documentElement.scroll({
        top: getScrollOffsetY(element) - 150,
        behavior: "smooth"
    });
}

function scrollToElement(id) {
    var cancion = document.getElementById(id);
    scrollTo(cancion);
}

const toTopButton = document.querySelector('.topButton');

window.onscroll = () => {
    if (window.scrollY > 200) {
        toTopButton.style.opacity = 100;
    } else {
        toTopButton.style.opacity = 0;
    }
}

// Audio
const allAudios = document.querySelectorAll('.audio-player');

allAudios.forEach(player => {
    const audio = player.querySelector('audio');
    const playPauseBtn = player.querySelector('.play-pause');
    const seekSlider = player.querySelector('.seek-slider');
    const currentTimeElem = player.querySelector('.current-time');
    const durationElem = player.querySelector('.duration');


    playPauseBtn.addEventListener('click', () => {
        const isPlaying = playPauseBtn.classList.contains('playing');
        stopAllAudios();
        if (!isPlaying) {
            audio.play();
            playPauseBtn.classList.add('playing');
        }
    });

    audio.addEventListener('timeupdate', () => {
        seekSlider.value = (audio.currentTime / audio.duration) * 100;
        currentTimeElem.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
        durationElem.textContent = formatTime(audio.duration);
    });

    seekSlider.addEventListener('input', () => {
        audio.currentTime = (seekSlider.value / 100) * audio.duration;
    });

    audio.addEventListener('ended', () => {
        playPauseBtn.classList.remove('playing');
    });
});

function stopAllAudios() {
    allAudios.forEach(player => {
        const audio = player.querySelector('audio');
        const playPauseBtn = player.querySelector('.play-pause');
        audio.pause();
        playPauseBtn.classList.remove('playing');
    });
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}




// Cursor
if (window.innerWidth > 768) {
    const cursor = document.querySelector(".cursor");
    const circle = document.querySelector("#circle");
    const anchors = document.querySelectorAll("a, button");

    anchors.forEach(item => {
        item.addEventListener("mouseenter", () => {
            cursor.style.transform = "scale(3)";
            circle.style.fill = "#8A4800";
        });
        item.addEventListener("mouseleave", () => {
            cursor.style.transform = "scale(1.5)";
            circle.style.fill = "#8A6436";
        });
    });

    document.onmousemove = event => {
        const { clientX, clientY } = event;

        cursor.style.left = (clientX - cursor.offsetWidth / 2) + 'px';
        cursor.style.top = (clientY - cursor.offsetHeight / 2) + 'px';
    }
}
