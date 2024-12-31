document.addEventListener('DOMContentLoaded', () => {
    const surpriseBtn = document.getElementById('surprise-btn');
    const likeBtn = document.getElementById('like-btn');
    const video = document.getElementById('surprise-video');
    const overlay = document.getElementById('overlay');

    surpriseBtn.addEventListener('click', () => {
        video.classList.remove('hidden');
        overlay.classList.remove('hidden');
        video.play();
    });

    video.addEventListener('ended', () => {
        video.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        video.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
        const heart = likeBtn.querySelector('.heart');
        heart.style.animation = 'none';
        heart.offsetHeight; // Trigger reflow
        heart.style.animation = null;
    });
});

