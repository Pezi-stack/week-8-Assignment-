// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Simple validation
            if (!name.value.trim()) {
                alert('Please enter your name');
                isValid = false;
                name.focus();
            } else if (!email.value.trim() || !isValidEmail(email.value)) {
                alert('Please enter a valid email address');
                isValid = false;
                email.focus();
            } else if (!subject.value.trim()) {
                alert('Please enter a subject');
                isValid = false;
                subject.focus();
            } else if (!message.value.trim()) {
                alert('Please enter your message');
                isValid = false;
                message.focus();
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server here
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
