document.addEventListener('DOMContentLoaded', () => {
    
    const projectContent = document.getElementById('project-content');
    
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));

    // Find the project in data.js
    const project = portfolioData.find(p => p.id === projectId);

    if (!project) {
        // Redirect to home if no project found
        window.location.href = 'index.html';
        return;
    }

    // Set document title
    document.title = `${project.title} — Moayad Alayan`;

    // Render project HTML
    const embedUrl = `https://drive.google.com/file/d/${project.video}/preview`;
    
    const html = `
        <div class="project-hero">
            <div class="container">
                <a href="index.html#work" class="back-link">← Back to Work</a>
                <h1 class="project-hero-title">${project.title}</h1>
            </div>
        </div>
        
        <div class="project-video-section">
            <div class="container">
                <div class="project-video-wrapper">
                    <iframe src="${embedUrl}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
                </div>
            </div>
        </div>

        <div class="project-details">
            <div class="container project-details-grid">
                <div class="project-meta">
                    <div class="meta-item">
                        <span class="meta-label">Role</span>
                        <span class="meta-value">${project.role}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Category</span>
                        <span class="meta-value">${project.category}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Year</span>
                        <span class="meta-value">${project.year}</span>
                    </div>
                </div>
                
                <div class="project-story">
                    <div class="story-section">
                        <h2>Overview</h2>
                        <p>${project.description}</p>
                    </div>
                    <div class="story-section">
                        <h2>Process</h2>
                        <p>${project.process}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    projectContent.innerHTML = html;

    // Mobile menu logic (copied from app.js)
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const nav = document.querySelector('.nav');

    function toggleMobileMenu() {
        menuToggle.classList.toggle('is-active');
        mobileNav.classList.toggle('is-active');
        document.body.style.overflow = mobileNav.classList.contains('is-active') ? 'hidden' : '';
    }

    menuToggle.addEventListener('click', toggleMobileMenu);
    mobileNavLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));

    // Nav Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
