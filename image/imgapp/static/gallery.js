
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(img.src);
    });
});

function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

document.querySelector('.lightbox .close').onclick = function() {
    document.getElementById("lightbox").style.display = "none";
};

document.getElementById("lightbox").addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = "none";
    }
});
