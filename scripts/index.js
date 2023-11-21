window.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-item");
  const modalButtons = document.querySelectorAll(".btn-modal");
  const modalCloseBtn = document.querySelector(".modal__close");
  const modal = document.querySelector(".modal");
  const movieBtn = document.querySelector(".movie__btn");
  const movie = document.querySelector(".movie__video");
  const hamburgerBtn = document.querySelector(".hamburger");
  const navbarMenu = document.querySelector(".navbar-menu");
  const navbarItems = document.querySelectorAll(".navbar-menu__item");
  const contactBtn = document.querySelector(".contact-btn");

  movieBtn.addEventListener("click", function () {
    if (movie.paused) {
      movie.play();
      movieBtn.style.display = "none";
    }
  });

  movie.addEventListener("click", function () {
    if (!movie.paused) {
      movie.pause();
      movieBtn.style.display = "block";
    }
  });

  function toggleAccordion(item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      accordions.forEach((accordion) => {
        if (accordion !== item) {
          accordion.classList.remove("active");
        }
      });
      item.classList.add("active");
    }
  }

  modalButtons.forEach((item) =>
    item.addEventListener("click", () => {
      if (!modal.classList.contains("modal--active")) {
        modal.classList.add("modal--active");
      }
    })
  );

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("modal--active");
  });

  accordions.forEach((item) => {
    item.addEventListener("click", () => {
      toggleAccordion(item);
    });
  });

  hamburgerBtn.addEventListener("click", function () {
    hamburgerBtn.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });

  // Close menu handler
  document.addEventListener("click", function (event) {
    const isClickInsideMenu =
      navbarMenu.contains(event.target) || hamburgerBtn.contains(event.target);

    const isNavbarItems = Array.from(navbarItems).some((item) =>
      item.contains(event.target)
    );

    const isContactBtn = contactBtn.contains(event.target);

    const shouldCloseMenu =
      (!isClickInsideMenu && navbarMenu.classList.contains("active")) ||
      isNavbarItems ||
      isContactBtn;

    if (shouldCloseMenu) {
      navbarMenu.classList.remove("active");
      hamburgerBtn.classList.remove("active");
    }
  });
});
