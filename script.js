const romanticNewYearImages = [
    'p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg',
    'p6.jpg', 'p7.jpg', 'p8.jpg', 'p9.jpg', 'p10.jpg',
    'p11.jpg', 'p12.jpg', 'p13.jpg', 'p14.jpg', 'p15.jpg',
    'p16.jpg', 'p17.jpg', 'p18.jpg', 'p19.jpg', 'p20.jpg',
    'p21.jpg', 'p22.jpg', 'p23.jpg'
];

const raindropContainer = document.getElementById('raindrop-container');

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';

    const img = document.createElement('img');
    img.src = romanticNewYearImages[Math.floor(Math.random() * romanticNewYearImages.length)];

    raindrop.appendChild(img);
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 3 + 4}s`;
    raindrop.style.animationDelay = `${Math.random() * 2}s`;

    raindropContainer.appendChild(raindrop);

    raindrop.addEventListener('animationend', () => {
        raindrop.remove();
        createRaindrop();
    });
}

function initRain() {
    for (let i = 0; i < 20; i++) {
        setTimeout(createRaindrop, i * 300);
    }
}

initRain();

document.getElementById('proceed-btn').addEventListener('click', () => {
    window.location.href = 'message.html';
});

