// routes.js
import Landing from '../pages/landing.js';
import Beranda from '../pages/beranda.js';
// import Contact from './pages/contact.js';

export const animate = () => {    
        const elements = document.querySelectorAll('.animate-fade-slide');
    
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("slide-up");
              observer.unobserve(entry.target);  // Stop observing after the first intersection
            }
          });
        }, { threshold: 0.1 });
    
        elements.forEach(element => {
          // Check if the element is already in view when the page loads
          if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add("slide-up");
          } else {
            observer.observe(element);
          }
        });      
}

const routes = {
    '/': Landing,
    '/beranda': Beranda
    // '/contact': Contact
};

export function router() {
    const path = window.location.pathname;
    const route = routes[path] || Landing;
    document.getElementById('app').innerHTML = route();
    animate();
}

export function navigateTo(url) {
    window.history.pushState({}, '', url);
    router();
    window.scrollTo(0,0)
}

window.addEventListener('popstate', router);

// Set up the initial route
window.addEventListener('load', () => {
    router();
});
