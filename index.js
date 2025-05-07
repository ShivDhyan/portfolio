// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Store user preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});
// Smooth scroll for all nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Highlight active section in navbar (on scroll)
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY + 150;
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const offset = section.offsetTop;
      const height = section.offsetHeight;
      const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (scrollY >= offset && scrollY < offset + height) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  });
  
  // Optional: Mobile nav toggle 
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-links');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
  