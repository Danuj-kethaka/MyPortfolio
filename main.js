var typed = new Typed(".text",
    {
        strings:[ "Full-Stack Developer","Mobile App Developer","UI/UX Designer"  ," AI/ML Enthusiast" ],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true

    }
);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
    });
});




// Color toggle functionality
const colorToggle = document.querySelector('.color-toggle');
const body = document.body;
const header = document.querySelector('.header');
let isDark = true;

colorToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        body.style.background = '#000000';
        header.style.background = '#000000';
    } else {
        body.style.background = '#ffffff';
        header.style.background = '#ffffff';
    }
});

// Make sure to include this if you're using Boxicons
document.addEventListener('DOMContentLoaded', function() {
    // Load Boxicons if not already loaded
    if (!document.querySelector('box-icons')) {
        const boxicons = document.createElement('script');
        boxicons.src = 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js';
        document.head.appendChild(boxicons);
    }
});



