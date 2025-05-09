// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference or use system preference
if (localStorage.getItem('darkMode') === 'enabled' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Animate on scroll
const animateElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

animateElements.forEach(element => {
    observer.observe(element);
});

// Animate skill bars
document.querySelectorAll('.skill-progress').forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.width = level + '%';
});

// Tambahkan efek hover untuk item interest
document.querySelectorAll('.interest-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.interest-icon i');
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.interest-icon i');
        icon.style.transform = '';
    });
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.project-title').style.color = 'var(--accent-dark)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.project-title').style.color = '';
    });
});

// Download button effect
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a temporary element for print
    const printWindow = window.open('', '', 'width=800,height=900');
    printWindow.document.write(`
        <html>
            <head>
                <title>Caroline Carren - CV</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    .resume-header { background: #5D9BCC; color: white; padding: 30px; text-align: center; }
                    .section { margin-bottom: 30px; }
                    h1 { font-size: 24px; }
                    h2 { font-size: 20px; color: #5D9BCC; }
                    h3 { font-size: 18px; }
                    .timeline-item { margin-bottom: 15px; }
                    .skill-bar { height: 10px; background: #eee; margin-top: 5px; }
                    .skill-progress { height: 100%; background: linear-gradient(90deg, #FFB6C1, #FF69B4); }
                    .project-card { border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 5px; }
                    .contact-info { margin: 15px 0; }
                    .contact-item { margin-bottom: 8px; }
                    @media print {
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .resume-header { background: #5D9BCC !important; }
                        .skill-progress { background: linear-gradient(90deg, #FFB6C1, #FF69B4) !important; }
                    }
                </style>
            </head>
            <body>
                ${document.querySelector('.container').outerHTML}
                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() {
                            window.close();
                        }, 1000);
                    };
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
});

// Profile image hover effect
const profileImg = document.querySelector('.profile-img');
if (profileImg) {
    profileImg.addEventListener('mouseenter', () => {
        profileImg.style.transform = 'scale(1.05) rotate(5deg)';
        profileImg.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
    });
    
    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.transform = '';
        profileImg.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
}

// Section icon hover effect
document.querySelectorAll('.section-header i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(15deg) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = '';
    });
});

