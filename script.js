// ========================================
// CUSTOM CURSOR - DESKTOP ONLY
// ========================================
if (window.innerWidth > 768) {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        const diffX = mouseX - cursorX;
        const diffY = mouseY - cursorY;
        
        cursorX += diffX * 0.25;
        cursorY += diffY * 0.25;
        followerX += (mouseX - followerX) * 0.08;
        followerY += (mouseY - followerY) * 0.08;
        
        cursor.style.transform = `translate3d(${cursorX - 8}px, ${cursorY - 8}px, 0)`;
        follower.style.transform = `translate3d(${followerX - 20}px, ${followerY - 20}px, 0)`;
        
        requestAnimationFrame(animate);
    }
    animate();
    
    // Cursor hover effects
    const hoverTargets = document.querySelectorAll('a, button, .faq-item, .project-card, .benefit-card, .pricing-card');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when link clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// FAQ ACCORDION
// ========================================
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('service-item')) {
                entry.target.classList.add('visible');
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Observe service items
document.querySelectorAll('.service-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.08}s`;
    observer.observe(item);
});

// Observe sections for fade-in animations
document.querySelectorAll('.what-we-do, .process, .benefits, .pricing, .testimonials').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(60px)';
    section.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});

// ========================================
// PARALLAX EFFECT ON HERO IMAGE (DESKTOP)
// ========================================
if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// ========================================
// STAGGER ANIMATIONS FOR SHOWCASE ITEMS
// ========================================
const showcaseItems = document.querySelectorAll('.showcase-item');
const showcaseObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

showcaseItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    showcaseObserver.observe(item);
});

// ========================================
// PROCESS STEPS ANIMATION
// ========================================
const processSteps = document.querySelectorAll('.process-step');
const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.3 });

processSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(-40px)';
    step.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    processObserver.observe(step);
});

// ========================================
// BENEFITS CARDS STAGGER ANIMATION
// ========================================
const benefitCards = document.querySelectorAll('.benefit-card');
const benefitsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 80);
        }
    });
}, { threshold: 0.2 });

benefitCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    benefitsObserver.observe(card);
});

// ========================================
// PRICING CARDS ANIMATION
// ========================================
const pricingCards = document.querySelectorAll('.pricing-card');
const pricingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1) translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

pricingCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95) translateY(40px)';
    card.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    pricingObserver.observe(card);
});

// ========================================
// MAGNETIC EFFECT FOR BUTTONS (DESKTOP)
// ========================================
if (window.innerWidth > 768) {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .pricing-cta');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

// ========================================
// STACKING CARDS EFFECT FOR PROJECT SECTION
// ========================================

/**
 * Main function to update project cards stacking effect
 * This creates the smooth scaling and opacity transitions as you scroll
 */
function updateProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    const container = document.querySelector('.projects-stack-container');
    
    // Exit if no cards found
    if (!container || cards.length === 0) return;
    
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    cards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;
        
        // Calculate overall scroll progress through container
        const scrollProgress = (scrollY - containerTop + windowHeight) / (containerHeight + windowHeight);
        
        // Calculate when this specific card should start its animation
        const cardProgress = (scrollY + windowHeight - cardTop) / (windowHeight + cardHeight);
        
        // ========================================
        // SCALE EFFECT
        // Cards scale down as the next card approaches
        // ========================================
        let scale = 1;
        const nextCard = cards[index + 1];
        
        if (nextCard) {
            const nextCardTop = nextCard.offsetTop;
            const distanceToNext = nextCardTop - scrollY - windowHeight * 0.2;
            const scaleRange = windowHeight * 0.6;
            
            if (distanceToNext < scaleRange) {
                // Calculate scale: from 1.0 down to 0.85
                scale = 0.95 + (distanceToNext / scaleRange) * 0.05;
                scale = Math.max(0.85, Math.min(1, scale));
            }
        }
        
        // ========================================
        // OPACITY EFFECT
        // Cards fade out after they've scrolled past
        // ========================================
        let opacity = 1;
        if (cardProgress > 1.5) {
            opacity = Math.max(0.3, 1 - (cardProgress - 1.5) * 0.5);
        }
        
        // ========================================
        // APPLY TRANSFORMS
        // ========================================
        const wrapper = card.querySelector('.project-wrapper');
        if (wrapper) {
            wrapper.style.transform = `scale(${scale})`;
            wrapper.style.opacity = opacity;
        }
        
        // Add subtle translation for depth effect
        const translateY = Math.max(0, (1 - scale) * 30);
        card.style.transform = `translateY(${translateY}px)`;
    });
}

// ========================================
// THROTTLE SCROLL EVENTS FOR PERFORMANCE
// ========================================
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateProjectCards();
            ticking = false;
        });
        ticking = true;
    }
});

// ========================================
// INITIAL CALL AND RESIZE HANDLER
// ========================================
// Call on page load
updateProjectCards();

// Update on window resize
window.addEventListener('resize', () => {
    updateProjectCards();
});

// ========================================
// DOM CONTENT LOADED
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Run stacking cards effect after DOM is fully loaded
    setTimeout(() => {
        updateProjectCards();
    }, 100);
    
    console.log('🎨 Bravo Agency Template Loaded Successfully!');
    console.log('✨ Stacking Cards Effect: Active');
});