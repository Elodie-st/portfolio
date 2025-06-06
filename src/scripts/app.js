

function toggleVideos() {
    const isMobile = window.innerWidth <= 734;
  
    const desktopVideos = document.querySelectorAll(".video--desktop");
    const mobileVideos = document.querySelectorAll(".video--mobile");
  
    if (isMobile) {
      desktopVideos.forEach(video => video.style.display = "none");
      mobileVideos.forEach(video => video.style.display = "block");
    } else {
      desktopVideos.forEach(video => video.style.display = "block");
      mobileVideos.forEach(video => video.style.display = "none");
    }
  }

  window.addEventListener("DOMContentLoaded", toggleVideos);
  window.addEventListener("resize", toggleVideos);



//soleil

const sun = document.getElementById('sun');

if (sun) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollRatio = scrollY / maxScroll; 

    const top = -10 + scrollRatio * 40; 

    let left;
    if (scrollRatio <= 0.4) {
      left = 40 - (scrollRatio / 0.4) * 35;
    } else {
      left = 5 + ((scrollRatio - 0.4) / 0.6) * 35;
    }

    let scale;
    if (scrollRatio <= 0.4) {
      scale = 1;
    } else {
      scale = 1 + ((scrollRatio - 0.4) / 0.6) * 0.4;
    }

    sun.style.top = `${top}vh`;
    sun.style.left = `${left}vw`;
    sun.style.transform = `scale(${scale})`;
  });
}






//lune
const moon = document.getElementById('moon');

if (moon) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollRatio = scrollY / maxScroll;

    // Mouvement vertical : de -10vh à 30vh
    const top = -10 + scrollRatio * 40;

    let left;

    if (scrollRatio <= 1 / 3) {
      // Phase 1 : reste collée à droite (left = 95vw)
      left = 50;
    } else if (scrollRatio <= 2 / 3) {
      // Phase 2 : transition droite → gauche (95 → 0)
      const phaseProgress = (scrollRatio - 1 / 3) / (1 / 3); // de 0 à 1
      left = 50 - phaseProgress * 55; // 95 → 0
    } else {
      // Phase 3 : reste collée à gauche (left = 0)
      left = 0;
    }

    moon.style.top = `${top}vh`;
    moon.style.left = `${left}vw`;
  });
}