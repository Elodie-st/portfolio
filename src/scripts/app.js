

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


  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#sun", {
    y: 200, // déplacement vers le bas
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1 // effet de suivi fluide
    }
  });
/*
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#sun", {
    y: () => {
      const sun = document.querySelector("#sun");
      const hand = document.querySelector("#hand");
      const sunTop = sun.getBoundingClientRect().top;
      const handTop = hand.getBoundingClientRect().top;
      return handTop - sunTop - 50; // ajuste le -50 si besoin
    },
    ease: "none",
    scrollTrigger: {
      trigger: "body", // 👈 plus besoin de scroll-wrapper !
      start: "top top",
      endTrigger: "#hand",
      end: "top center",
      scrub: true
    }
  });*/