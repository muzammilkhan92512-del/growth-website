// ========== UTILITY FUNCTIONS ==========

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Scroll to contact section
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Open WhatsApp
function openWhatsApp() {
  window.open('https://wa.me/923201292512', '_blank');
}

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// FAQ Toggle
function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const toggle = element.querySelector('.faq-toggle');

  // Close all other FAQs
  document.querySelectorAll('.faq-answer').forEach(item => {
    if (item !== answer) {
      item.classList.remove('open');
      item.previousElementSibling.querySelector('.faq-toggle').classList.remove('open');
    }
  });

  // Toggle current FAQ
  answer.classList.toggle('open');
  toggle.classList.toggle('open');
}

// ========== GSAP ANIMATIONS ==========

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero animations - stagger animation on load
gsap.to('.animate', {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.15,
  ease: 'power3.out'
});

// Navbar animation
gsap.from('.navbar', {
  y: -50,
  opacity: 0,
  duration: 0.8
});

// Animate cards on scroll
gsap.utils.toArray('.animate-card').forEach((element) => {
  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// Section title animations
gsap.utils.toArray('.section-title').forEach((title) => {
  gsap.from(title, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: title,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// Stats counter animation
gsap.utils.toArray('.stat h3').forEach((stat) => {
  let targetValue = parseInt(stat.innerText);
  gsap.to(stat, {
    textContent: targetValue,
    duration: 2,
    snap: { textContent: 1 },
    scrollTrigger: {
      trigger: stat,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// Trust cards hover effect
gsap.utils.toArray('.trust-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      duration: 0.3,
      boxShadow: '0 20px 50px rgba(255, 215, 0, 0.1)',
      ease: 'power2.out'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.3,
      boxShadow: 'none',
      ease: 'power2.out'
    });
  });
});

// Service cards animation
gsap.from('.service-card', {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.services-grid',
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});

// Pricing cards animation
gsap.from('.pricing-card', {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: '.pricing-grid',
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});

// Testimonial cards animation
gsap.from('.testimonial-card', {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: '.testimonials-grid',
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});

// Results cards animation
gsap.from('.result-card', {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.results-grid',
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});

// FAQ items animation
gsap.from('.faq-item', {
  opacity: 0,
  x: -30,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.faq-container',
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});

// ========== SCROLL EFFECTS ==========

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  // Add shadow to navbar on scroll
  if (scrollTop > 50) {
    navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

navbar.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

// ========== BUTTON HOVER EFFECTS ==========

// Button hover animations
gsap.utils.toArray('.btn').forEach((button) => {
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      duration: 0.2,
      scale: 1.05,
      ease: 'power2.out'
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      duration: 0.2,
      scale: 1,
      ease: 'power2.out'
    });
  });
});

// ========== PARALLAX EFFECT ==========

// Parallax scroll effect for hero overlay
const heroOverlay = document.querySelector('.hero-overlay');

window.addEventListener('scroll', () => {
  if (heroOverlay) {
    const scrollTop = window.pageYOffset;
    const parallaxSpeed = scrollTop * 0.5;
    heroOverlay.style.transform = `translateY(${parallaxSpeed}px)`;
  }
});

// ========== TEXT REVEAL ANIMATION ==========

// Animated text reveal on load
gsap.to('.hero-title', {
  opacity: 1,
  duration: 1.2,
  ease: 'power3.out'
});

// ========== PERFORMANCE OPTIMIZATION ==========

// Lazy load images (if added in future)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.backgroundImage = entry.target.getAttribute('data-bg');
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('[data-bg]').forEach(img => imageObserver.observe(img));
}

// ========== EVENT LISTENERS ==========

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== PAGE LOAD ==========

// Initialize on page load
window.addEventListener('load', () => {
  // Preload animations
  gsap.globalTimeline.timeScale(1);

  // Add loaded class for transitions
  document.body.classList.add('loaded');
});

// ========== ADDITIONAL UTILITIES ==========

// Track user interactions for analytics (optional)
let interactionCount = 0;

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
    interactionCount++;
    console.log(`User interaction: ${interactionCount}`);
  }
});