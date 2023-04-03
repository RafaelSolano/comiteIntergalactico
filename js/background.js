const space = document.querySelector('.stars');
const starsMax = 300;

// Functions
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStar() {
    const star = document.createElement('span');
    star.classList.add('star');

    // size
    const size = star.style.width = random(2, 7) + 'px';
    star.style.width = size;
    star.style.height = size;

    // positon
    star.style.top = random(2, 98) + '%';
    star.style.left = random(2, 98) + '%';

    // glow
    const glow = random(3, 5);
    star.style.boxShadow = '0px 0px ' + glow + 'px ' + glow / 1.6 + 'px   rgba(255, 255, 255, 0.3)';

    // animation
    star.style.animationDuration = random(3000, 5000) + 'ms';
    
    space.appendChild(star);
}

function populateSpace(nbr) {
    for (var i = 0; i < nbr; i++) {
        createStar();
    }
}

// Events
populateSpace(100);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let starsNb = Number(this.starsNb.value);
    if (isNaN(starsNb)) return;
    if (!(starsNb >= 0) || !(starsNb <= starsMax)) return;
    if (starsNb <= 1) {
        this.submitBtn.value = 'Star';
    } else {
        this.submitBtn.value = 'Stars';
    }
    space.innerHTML = '';
    populateSpace(starsNb);
});