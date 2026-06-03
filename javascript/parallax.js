(function() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroTexte = hero.querySelector('.hero-texte');
    const heroCarrousel = hero.querySelector('.hero-carrousel');

    const facteurTexte = 0.03;
    const facteurCarrousel = 0.06;

    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        if (heroTexte) {
            const moveX = x * facteurTexte * 50;
            const moveY = y * facteurTexte * 50;
            heroTexte.style.transform = `translate(${moveX}px, ${moveY}px)`;
            heroTexte.style.transition = 'transform 0.1s ease-out';
        }

        if (heroCarrousel) {
            const moveX = x * facteurCarrousel * 50;
            const moveY = y * facteurCarrousel * 50;
            heroCarrousel.style.transform = `translate(${moveX}px, ${moveY}px)`;
            heroCarrousel.style.transition = 'transform 0.1s ease-out';
        }
    });

    document.addEventListener('mouseleave', function() {
        if (heroTexte) heroTexte.style.transform = 'translate(0, 0)';
        if (heroCarrousel) heroCarrousel.style.transform = 'translate(0, 0)';
    });
})();