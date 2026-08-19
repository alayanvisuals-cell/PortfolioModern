// ============================================
// Moayad Alayan Portfolio — Application Script
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    // --- DOM Elements ---
    const grid = document.getElementById('portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // --- Render Grid ---
    function renderGrid(filter = 'all') {
        grid.innerHTML = '';
        
        let filteredData = portfolioData;
        if (filter !== 'all') {
            filteredData = portfolioData.filter(item => item.tags.includes(filter));
        }

        filteredData.forEach((item, index) => {
            const isFeatured = index % 3 === 0; // Every 3rd item is featured (larger) on desktop
            
            const card = document.createElement('div');
            card.className = `project-card ${isFeatured ? 'featured' : ''}`;
            card.innerHTML = `
                <div class="project-image-container">
                    <video src="${item.thumbnail}" class="project-image" autoplay loop muted playsinline></video>
                </div>
                <div class="project-info">
                    <div>
                        <h3 class="project-title">${item.title}</h3>
                        <span class="project-category">${item.category}</span>
                    </div>
                    <span class="project-view-indicator">View Project →</span>
                </div>
            `;
            
            card.addEventListener('click', () => {
                window.location.href = `project.html?id=${item.id}`;
            });
            grid.appendChild(card);
        });
    }

    // --- Filtering ---
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            // Re-render
            renderGrid(btn.dataset.filter);
        });
    });

    // --- Navigation & Scroll Effects ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu
    function toggleMobileMenu() {
        menuToggle.classList.toggle('is-active');
        mobileNav.classList.toggle('is-active');
        document.body.style.overflow = mobileNav.classList.contains('is-active') ? 'hidden' : '';
    }

    menuToggle.addEventListener('click', toggleMobileMenu);
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initial render
    renderGrid('all');
});
