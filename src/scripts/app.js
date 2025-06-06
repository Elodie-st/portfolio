

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


    const top = -10 + scrollRatio * 40;

    let left;

    if (scrollRatio <= 1 / 3) {

      left = 50;
    } else if (scrollRatio <= 2 / 3) {

      const phaseProgress = (scrollRatio - 1 / 3) / (1 / 3); 
      left = 50 - phaseProgress * 55; 
    } else {
      
      left = 0;
    }

    moon.style.top = `${top}vh`;
    moon.style.left = `${left}vw`;
  });
}

//lune sur dataplay

const moonDataplay = document.getElementById('moon--data');

if (moonDataplay) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollRatio = scrollY / maxScroll;

    const top = -10 + scrollRatio * 40;

    let left;

    if (scrollRatio <= 1 / 3) {

      left = 50;
    } else if (scrollRatio <= 2 / 3) {

      const phaseProgress = (scrollRatio - 1 / 3) / (1 / 3); 
      left = 50 - phaseProgress * 55; 
    } else {
      
      left = 0;
    }
    moonDataplay.style.top = `${top}vh`;
    moonDataplay.style.left = `${left}vw`;
  });
}