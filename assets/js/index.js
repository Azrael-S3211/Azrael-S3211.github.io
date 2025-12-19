/**
 * index.js - Script da nova página inicial
 */

const bannerRoot = document.getElementById('banner-carousel');
const banners = bannerRoot ? bannerRoot.querySelectorAll('.banner-slide') : [];
const bannerDots = bannerRoot ? bannerRoot.querySelectorAll('.banner-dot') : [];
let currentBanner = 0;
let autoplayId = null;

function setBanner(index) {
    if (!banners.length) return;
    banners[currentBanner].classList.remove('active');
    bannerDots[currentBanner]?.classList.remove('active');
    currentBanner = (index + banners.length) % banners.length;
    banners[currentBanner].classList.add('active');
    bannerDots[currentBanner]?.classList.add('active');
}

// Exposto globalmente para uso inline
function changeBanner(direction) {
    if (!banners.length) return;
    setBanner(currentBanner + direction);
}

function goToBanner(index) {
    if (!banners.length || index < 0 || index >= banners.length) return;
    setBanner(index);
}

function startAutoplay() {
    if (banners.length <= 1) return;
    stopAutoplay();
    autoplayId = setInterval(() => changeBanner(1), 5000);
}

function stopAutoplay() {
    if (autoplayId) {
        clearInterval(autoplayId);
        autoplayId = null;
    }
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    startAutoplay();
});

