document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.querySelector('#home-page');
    const aboutSection = document.querySelector('#about');
    const missionSection = document.querySelector('#mission');
    const contactSection = document.querySelector('#contact');
    const donationSection = document.querySelector('#donation');
    const getFoodForm = document.querySelector('#get-food-form');
  
    const navItems = document.querySelectorAll('nav a');
  
    // Toggle section visibility
    const toggleSection = (id) => {
      navItems.forEach((item) => item.classList.remove('current'));
      document.querySelector(`nav a[href="#${id}"]`).classList.add('current');
  
      document.querySelectorAll('.hidden-section').forEach((section) => {
        if (section.id === id) {
          section.classList.remove('hidden-section');
        } else {
          section.classList.add('hidden-section');
        }
      });
    };
  
    // Add click event listeners to navigation menu
    navItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection(item.getAttribute('href').substring(1));
      });
    });
  
    // Set initial active section
    toggleSection('home-page');
  
    // Donate button click event
    document.querySelector('#donate-btn-now').addEventListener('click', () => {
      toggleSection('donation');
    });
  });
  