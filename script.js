// Handle image upload
document.querySelectorAll('.image-upload input').forEach(input => {
    input.addEventListener('change', function(e) {
        const files = e.target.files;
        const propertyCard = this.closest('.property-card');
        const imageContainer = propertyCard.querySelector('.property-images');
        
        // Clear existing image
        const existingImg = imageContainer.querySelector('img');
        if (existingImg) {
            existingImg.remove();
        }
        
        // Add new image
        if (files.length > 0) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(files[0]);
            img.alt = propertyCard.querySelector('h3').textContent;
            imageContainer.insertBefore(img, imageContainer.firstChild);
        }
    });
});

// Handle contact form submission
document.getElementById('inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        property: document.getElementById('property').value,
        message: document.getElementById('message').value
    };
    
    // Here you can add code to send form data to server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your inquiry! We will contact you soon.');
    this.reset();
});

// Handle schedule viewing button clicks
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', function() {
        const property = this.getAttribute('data-property');
        const propertyName = property === '955' ? '955 Curd Rd' : '61 E Caldwell St';
        
        // Scroll to contact form
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Auto-select the property
        document.getElementById('property').value = property;
    });
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add responsive navigation
const handleResponsiveNav = () => {
    const nav = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
    
    if (window.innerWidth <= 768) {
        // Create hamburger menu button
        if (!document.querySelector('.menu-btn')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'menu-btn';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            logo.parentNode.insertBefore(menuBtn, nav);
            
            menuBtn.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    } else {
        nav.style.display = 'flex';
        const menuBtn = document.querySelector('.menu-btn');
        if (menuBtn) {
            menuBtn.remove();
        }
    }
};

window.addEventListener('resize', handleResponsiveNav);
handleResponsiveNav(); 