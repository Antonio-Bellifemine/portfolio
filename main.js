// Mobile menu toggle with proper hamburger ↔ X icon change
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("mobile-nav-active");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-xmark");
});

// Auto-close menu when clicking a nav link
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
            document.body.classList.remove('mobile-nav-active');
            // Change X back to hamburger
            menuBtn.classList.replace('fa-xmark', 'fa-bars');
        }
    });
});

// Your typing effect (perfect as is)
let typed = new Typed("#auto-input", {
    strings: ["Quality Assurance Engineer", "Automation Architect", "Entrepreneur", "Black Belt"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
});