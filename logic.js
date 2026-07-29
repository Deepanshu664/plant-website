document.addEventListener("DOMContentLoaded", function () {
  const scrollImg = document.querySelectorAll(".scroll-imgs")[0];
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const mobileMenuToggle = document.querySelector(".menu-toggle");
  const mobileNavMenu = document.getElementById("mobileNavMenu");
  const menuClose = document.querySelector(".menu-close");
  const menuBackdrop = document.querySelector(".menu-backdrop");
  const body = document.body;

  if (rightBtn && scrollImg) {
    rightBtn.addEventListener("click", () => {
      scrollImg.scrollLeft += 1355;
    });
  }

  if (leftBtn && scrollImg) {
    leftBtn.addEventListener("click", () => {
      scrollImg.scrollLeft -= 1355;
    });
  }

  function closeMenu(e) {
    if (mobileNavMenu && menuBackdrop) {
      mobileNavMenu.classList.remove("active");
      menuBackdrop.classList.remove("active");
      body.style.overflow = "auto";
    }
  }

  function toggleMenu() {
    if (mobileNavMenu && menuBackdrop) {
      const isActive = mobileNavMenu.classList.toggle("active");
      menuBackdrop.classList.toggle("active", isActive);
      if (isActive) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }

  if (menuBackdrop) {
    menuBackdrop.addEventListener("click", closeMenu);
  }

  if (mobileNavMenu) {
    const navLinks = mobileNavMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.stopPropagation();
        closeMenu();
      });
    });
  }
});
