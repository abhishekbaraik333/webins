document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link"); // 👈 add `let`
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuIcon = document.querySelector(".menu-icon");
  
    navLinks.forEach((nav) => {
      nav.addEventListener("click", function () {
        alert("Welcome to my Portfolio!");
        mobileMenu.classList.remove("active");
      });
    });
  
    mobileMenuIcon.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  });
  