var typed = new Typed(".text",
    {
        strings:["Frontend Developer", "Backend Developer","Web Developer" ],
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