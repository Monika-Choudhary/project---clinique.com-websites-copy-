// window.addEventListener("scroll", function () {
//     const header = document.getElementById("header");
//     const contentTop = document.querySelector('main').offsetTop;
  
//     if (window.scrollY >= contentTop) {
//       header.style.top = "-100px"; // Move header out of view
//     } else {
//       header.style.top = "0"; // Reset to sticky
//     }
//   });
  


let lastScrollTop = 0; // Variable to track the last scroll position
    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // If scrolling down, hide the header
        header.style.top = "-100px";  // Adjust this value based on header height
      } else {
        // If scrolling up, show the header
        header.style.top = "0";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
    });
