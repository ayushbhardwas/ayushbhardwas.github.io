// Portfolio scripts

function updateNavDelimiters() {
    const links = document.querySelectorAll('.nav-link');
    
    // First pass: remove all classes
    links.forEach(link => link.classList.remove('no-delimiter'));
    
    // Force browser to recalculate layout
    void document.body.offsetHeight;
    
    // Second pass: check positions and add classes where needed
    links.forEach((link, i) => {
        if (i < links.length - 1) {
            const currentTop = link.getBoundingClientRect().top;
            const nextTop = links[i + 1].getBoundingClientRect().top;
            
            // Use threshold to handle subpixel differences
            if (Math.abs(currentTop - nextTop) > 2) {
                link.classList.add('no-delimiter');
            }
        }
    });
}

// Run on load and resize
window.addEventListener('load', updateNavDelimiters);
window.addEventListener('resize', updateNavDelimiters);