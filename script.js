function openFullscreen(src, title) {
    const viewer = document.getElementById('fullscreen-viewer');
    const fullImg = document.getElementById('fullscreen-image');
    const caption = document.getElementById('fullscreen-caption');
    
    fullImg.src = src;
    caption.textContent = title;
    
    viewer.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeFullscreen() {
    document.getElementById('fullscreen-viewer').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close when clicking outside image
document.getElementById('fullscreen-viewer').addEventListener('click', function(e) {
    if (e.target === this) {
        closeFullscreen();
    }
});