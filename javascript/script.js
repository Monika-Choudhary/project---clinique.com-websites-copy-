window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const contentTop = document.querySelector('.main').offsetTop;
  
    if (window.scrollY >= contentTop) {
      header.style.top = "-100px"; // Move header out of view
    } else {
      header.style.top = "0"; // Reset to sticky
    }
  });
  