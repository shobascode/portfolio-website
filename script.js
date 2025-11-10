// Smooth page load animation
document.addEventListener('DOMContentLoaded', function() {
    // Set initial body opacity for smooth load
    document.body.style.opacity = '0';
    
    // Fade in the page
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
    }, 100);
    
    console.log('Portfolio website loaded successfully!');
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Subtle parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const parallaxSpeed = 0.3;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// Add interactive hover effects to tech icons
document.addEventListener('DOMContentLoaded', function() {
    const techIcons = document.querySelectorAll('.tech-icons i');
    
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(10deg)';
            this.style.filter = 'drop-shadow(0 0 15px currentColor)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'drop-shadow(0 0 10px currentColor)';
        });
    });
});

// Add click effect to the main CTA button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.btn-primary');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn-primary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth reveal animation for hero elements
document.addEventListener('DOMContentLoaded', function() {
    const heroElements = document.querySelectorAll('.greeting-text, .hero-title, .title-stack, .hero-description, .hero-cta');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
    });
});

// Add floating animation to code snippet
document.addEventListener('DOMContentLoaded', function() {
    const codeSnippet = document.querySelector('.code-snippet');
    
    if (codeSnippet) {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        });
        
        function animate() {
            const currentTransform = codeSnippet.style.transform || '';
            const floatTransform = currentTransform.includes('translateY') ? 
                currentTransform : currentTransform + ' translateY(-20px)';
            
            codeSnippet.style.transform = floatTransform + ` rotateX(${mouseY * 0.1}deg) rotateY(${mouseX * 0.1}deg)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    }
});