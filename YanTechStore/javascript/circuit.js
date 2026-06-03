(function() {
    const sectionCategories = document.querySelector('.categories');
    if (!sectionCategories) return;

    const cartes = document.querySelectorAll('.cat-carte');
    if (cartes.length < 2) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '0';
    sectionCategories.style.position = 'relative';
    sectionCategories.prepend(svg);

    function getPosition(element) {
        const rect = element.getBoundingClientRect();
        const parentRect = sectionCategories.getBoundingClientRect();
        return {
            x: rect.left - parentRect.left + rect.width / 2,
            y: rect.top - parentRect.top + rect.height / 2
        };
    }

    function drawConnections() {
        svg.innerHTML = '';
        const positions = [];
        cartes.forEach(carte => { positions.push(getPosition(carte)); });

        for (let i = 0; i < positions.length - 1; i++) {
            const p1 = positions[i];
            const p2 = positions[i + 1];
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2 - 30;

            path.setAttribute('d', `M ${p1.x} ${p1.y} Q ${midX} ${midY} ${p2.x} ${p2.y}`);
            path.setAttribute('stroke', '#00f0ff');
            path.setAttribute('stroke-width', '1.5');
            path.setAttribute('fill', 'none');
            path.setAttribute('opacity', '0.3');

            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            path.style.animation = `drawLine 2s ease-in-out ${i * 0.3}s forwards`;

            svg.appendChild(path);
        }

        positions.forEach((pos, index) => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', pos.x);
            circle.setAttribute('cy', pos.y);
            circle.setAttribute('r', '3');
            circle.setAttribute('fill', '#00f0ff');
            circle.setAttribute('opacity', '0.6');
            circle.style.animation = `pulsePoint 2s ease-in-out ${index * 0.3}s infinite alternate`;
            svg.appendChild(circle);
        });
    }

    drawConnections();
    window.addEventListener('resize', drawConnections);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes drawLine {
            to { stroke-dashoffset: 0; }
        }
        @keyframes pulsePoint {
            0% { transform: scale(1); opacity: 0.4; }
            100% { transform: scale(1.8); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
})();