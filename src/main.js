// main.js
import './style.css';
import { navigateTo } from './routes.js';
import { router } from './routes.js';


document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            const url = event.target.getAttribute('href');
            navigateTo(url);
        }
    });

    // Set the initial route
    router();
});

// document.addEventListener("DOMContentLoaded", setTimeout(
//     animate(), 500
// ));
