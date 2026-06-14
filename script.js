








/* ===================================================
   SMITH — UI/UX Designer Portfolio
   JavaScript: Nav, FAQ Accordion, Scroll Effects
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ========================
     MOBILE NAV TOGGLE
  ======================== */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Toggle icon between menu and close
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('bx-menu');
    icon.classList.toggle('bx-x');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelector('i').classList.add('bx-menu');
      hamburger.querySelector('i').classList.remove('bx-x');
    });
  });

  /* ========================
     ACTIVE NAV LINK ON SCROLL
  ======================== */
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  const observerOptions = { rootMargin: '-40% 0px -55% 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, observerOptions);

  sections.forEach(s => observer.observe(s));

  /* ========================
     FAQ ACCORDION
  ======================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item, idx) => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all
      faqItems.forEach(i => i.classList.remove('active'));
      // Open clicked if it was closed
      if (!isActive) item.classList.add('active');
    });
  });

  /* ========================
     CONTACT FORM SUBMIT
  ======================== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simple feedback — replace with real submission logic
      const btn = contactForm.querySelector('.submit-btn');
      const original = btn.innerHTML;
      btn.innerHTML = 'Sent! ✓';
      btn.style.background = '#4caf50';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        contactForm.reset();
      }, 2500);
    });
  }

  /* ========================
     SMOOTH SCROLL for anchor links
  ======================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ========================
     SCROLL REVEAL (lightweight)
     Fade-in sections as they enter viewport
  ======================== */
  const revealEls = document.querySelectorAll(
    '.service-card, .tool-card, .faq-item, .portfolio-card, .about-content, .about-img-wrap'
  );

  // Initial hidden state
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 80 * i); // stagger
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ========================
     TOOL BARS ANIMATE on scroll
  ======================== */
  const toolFills = document.querySelectorAll('.tool-fill');
  // Store widths, reset to 0
  const targetWidths = Array.from(toolFills).map(el => el.style.width);
  toolFills.forEach(el => { el.dataset.target = el.style.width; el.style.width = '0'; });

  const toolObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.tool-fill').forEach(fill => {
          setTimeout(() => { fill.style.width = fill.dataset.target; }, 200);
        });
        toolObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  const toolsSection = document.querySelector('.tools');
  if (toolsSection) toolObserver.observe(toolsSection);

  /* ========================
     NAVBAR SHADOW on scroll
  ======================== */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.25)';
    } else {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
    }
  });

});

