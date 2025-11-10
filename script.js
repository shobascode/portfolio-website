// Handwriting animation controller
document.addEventListener('DOMContentLoaded', function() {
    console.log('Handwriting animation loaded!');
    
    // Add sparkle effects during writing
    const container = document.querySelector('.handwriting-container');
    const svg = document.querySelector('.handwriting-svg');
    
    // Create sparkle effect
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        container.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
    
    // Add sparkles during animation
    const letters = document.querySelectorAll('.letter-path');
    letters.forEach((letter, index) => {
        letter.addEventListener('animationstart', function() {
            const rect = svg.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            // Create sparkles at random positions near the letter
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const x = Math.random() * rect.width;
                    const y = Math.random() * rect.height;
                    createSparkle(x, y);
                }, i * 200);
            }
        });
    });
    
    // Add completion celebration
    setTimeout(() => {
        celebrateCompletion();
    }, 5000);
});

function celebrateCompletion() {
    const container = document.querySelector('.handwriting-container');
    
    // Create celebration sparkles
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'celebration-sparkle';
            sparkle.style.left = Math.random() * container.offsetWidth + 'px';
            sparkle.style.top = Math.random() * container.offsetHeight + 'px';
            container.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }, i * 100);
    }
}

// Add CSS for sparkle effects
const sparkleCSS = `
.sparkle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #ff69b4;
    border-radius: 50%;
    pointer-events: none;
    animation: sparkleAnim 1s ease-out forwards;
    z-index: 10;
}

.celebration-sparkle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #ff69b4, #ffd700, #ff1493);
    border-radius: 50%;
    pointer-events: none;
    animation: celebrationSparkle 2s ease-out forwards;
    z-index: 10;
}

@keyframes sparkleAnim {
    0% {
        opacity: 1;
        transform: scale(0) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: scale(1.5) rotate(180deg);
    }
    100% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
    }
}

@keyframes celebrationSparkle {
    0% {
        opacity: 1;
        transform: scale(0) translateY(0);
    }
    50% {
        opacity: 1;
        transform: scale(1.2) translateY(-20px);
    }
    100% {
        opacity: 0;
        transform: scale(0) translateY(-40px);
    }
}
`;

// Inject sparkle CSS
const style = document.createElement('style');
style.textContent = sparkleCSS;
document.head.appendChild(style);

// Restart animation on click
document.addEventListener('click', function() {
    const letters = document.querySelectorAll('.letter-path');
    letters.forEach(letter => {
        letter.style.animation = 'none';
        letter.offsetHeight; // Trigger reflow
        letter.style.animation = null;
    });
});