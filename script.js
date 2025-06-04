// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all sections
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('click', function() {
            this.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add animation to profile photo
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 0 30px var(--neon-blue), 0 0 50px var(--neon-purple)';
        });

        profilePhoto.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 20px var(--neon-blue), 0 0 40px var(--neon-purple)';
        });
    }

    // Add click event to copy contact information
    const contactInfo = document.querySelectorAll('.contact-section .info-item span');
    contactInfo.forEach(info => {
        info.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show a temporary tooltip
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Copied!';
                tooltip.style.position = 'absolute';
                tooltip.style.backgroundColor = 'var(--neon-purple)';
                tooltip.style.color = 'white';
                tooltip.style.padding = '5px 10px';
                tooltip.style.borderRadius = '4px';
                tooltip.style.fontSize = '12px';
                tooltip.style.zIndex = '1000';
                tooltip.style.boxShadow = '0 0 10px var(--neon-pink)';
                
                // Position the tooltip
                const rect = this.getBoundingClientRect();
                tooltip.style.top = `${rect.top - 30}px`;
                tooltip.style.left = `${rect.left + (rect.width / 2) - 30}px`;
                
                document.body.appendChild(tooltip);
                
                // Remove tooltip after 2 seconds
                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            });
        });
    });

    // Add section highlight on scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.backgroundColor = 'rgba(188, 19, 254, 0.1)';
                setTimeout(() => {
                    entry.target.style.backgroundColor = 'var(--card-bg)';
                }, 1000);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add print functionality
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Biodata';
    printButton.id = 'printButton';
    printButton.style.position = 'fixed';
    printButton.style.bottom = '20px';
    printButton.style.right = '20px';
    printButton.style.padding = '10px 20px';
    printButton.style.backgroundColor = 'var(--neon-purple)';
    printButton.style.color = 'white';
    printButton.style.border = 'none';
    printButton.style.borderRadius = '5px';
    printButton.style.cursor = 'pointer';
    printButton.style.zIndex = '1000';
    printButton.style.transition = 'all 0.3s ease';

    printButton.addEventListener('click', () => {
        window.print();
    });

    document.body.appendChild(printButton);

    // Add responsive menu for mobile devices
    const header = document.querySelector('header');
    const menuButton = document.createElement('button');
    menuButton.textContent = '☰';
    menuButton.id = 'menuButton';
    menuButton.style.display = 'none';
    menuButton.style.position = 'absolute';
    menuButton.style.right = '20px';
    menuButton.style.top = '20px';
    menuButton.style.background = 'none';
    menuButton.style.border = 'none';
    menuButton.style.color = 'var(--neon-blue)';
    menuButton.style.fontSize = '24px';
    menuButton.style.cursor = 'pointer';
    menuButton.style.transition = 'all 0.3s ease';

    header.appendChild(menuButton);

    // Show/hide menu button based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
        } else {
            menuButton.style.display = 'none';
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    // Add mobile menu functionality
    menuButton.addEventListener('click', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.style.display === 'none') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
}); 