

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



