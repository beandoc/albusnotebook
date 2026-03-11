function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function copyInstallCommand() {
    const command = 'pip install notebooklm-py';
    navigator.clipboard.writeText(command).then(() => {
        const pill = document.querySelector('.install-pill');
        const icon = pill.querySelector('i');
        icon.className = 'fas fa-check';
        icon.style.color = 'var(--success)';
        
        setTimeout(() => {
            icon.className = 'far fa-copy';
            icon.style.color = 'var(--text-secondary)';
        }, 2000);
    });
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    });
}

// Tab Switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and hide all content
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.add('hidden'));
        
        // Add active class to clicked button and show relevant content
        button.classList.add('active');
        document.getElementById(tabId).classList.remove('hidden');
    });
});

// Mobile Menu (Simple toggle)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .cap-category, .step').forEach(el => {
    observer.observe(el);
});
