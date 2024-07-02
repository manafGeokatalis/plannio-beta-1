// routes.js
import Landing from '../pages/landing.js';
import Beranda from '../pages/beranda.js';
// import Contact from './pages/contact.js';

const routes = {
    '/': Landing,
    '/beranda': Beranda,
    // '/contact': Contact
};

export function router() {
    const path = window.location.pathname;
    const route = routes[path] || Landing;
    document.getElementById('app').innerHTML = route();
}

export function navigateTo(url) {
    window.history.pushState({}, '', url);
    router();
}

window.addEventListener('popstate', router);

// Set up the initial route
window.addEventListener('load', () => {
    router();
});
