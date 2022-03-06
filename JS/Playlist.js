let listVideo = document.querySelectorAll('.video_list .vid');
let mainVideo = document.querySelector('.main_video video');
let title = document.querySelector('.main_video .title');
let dscri = document.querySelector('.main_video .dsc');
listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            let dsc = video.children[2].innerHTML;
            title.innerHTML = text;
            dscri.innerHTML = dsc;
        };
    };
});

function to_home() {
    window.location.href = "Carousel.html"
}

function rain() {
    let amount = 30;
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('i');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20
        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        body.appendChild(drop);
        i++
    }
}

rain()