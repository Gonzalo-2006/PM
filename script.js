let isOpen = false;

function openTulip() {
    if (!isOpen) {
        const tulipContainer = document.getElementById('tulipContainer');
        const message = document.getElementById('message');
        const clickHint = document.getElementById('clickHint');
        
        tulipContainer.classList.add('open');
        clickHint.style.opacity = '0';
        
        setTimeout(() => {
            message.classList.add('show');
        }, 600);
        
        isOpen = true;
    }
}

function closeMessage() {
    const tulipContainer = document.getElementById('tulipContainer');
    const message = document.getElementById('message');
    const clickHint = document.getElementById('clickHint');
    
    message.classList.remove('show');
    
    setTimeout(() => {
        tulipContainer.classList.remove('open');
        clickHint.style.opacity = '1';
        isOpen = false;
    }, 400);
}

// Efectos de partículas románticas
function createRomanticParticle() {
    const particles = ['💖', '💕', '🌹', '✨', '💝'];
    const particle = document.createElement('div');
    particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '50vh';
    particle.style.fontSize = Math.random() * 10 + 15 + 'px';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    particle.style.pointerEvents = 'none';
    particle.style.animation = 'floatUp 2s ease-out forwards';
    particle.style.zIndex = '1';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// Crear partículas románticas ocasionalmente
setInterval(createRomanticParticle, 4000);

// Efecto de hover en el tulipán
document.addEventListener('DOMContentLoaded', function() {
    const tulipCard = document.querySelector('.tulip-card');
    
    tulipCard.addEventListener('mouseenter', function() {
        if (!isOpen) {
            this.style.filter = 'brightness(1.1) drop-shadow(0 10px 20px rgba(231, 76, 60, 0.3))';
        }
    });

    tulipCard.addEventListener('mouseleave', function() {
        this.style.filter = 'none';
    });
});