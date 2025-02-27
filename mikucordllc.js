window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const bg = document.querySelector('.background-image');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    let scrollY = window.scrollY;
    bg.style.transform = `translateY(${scrollY * 0.3}px)`; 
});
