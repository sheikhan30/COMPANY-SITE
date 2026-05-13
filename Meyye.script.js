// Change Navigation style on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "5px 5%";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    } else {
        header.style.padding = "15px 5%";
        header.style.backgroundColor = "#fff";
    }
});

// Simple reveal animation for grid items
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.grid-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "0.5s ease-out";
    observer.observe(item);
});
