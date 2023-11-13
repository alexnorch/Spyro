const accordions = document.querySelectorAll(".accordion-item");
const movieBtn = document.querySelector(".movie__btn");
const movie = document.querySelector(".movie__video");

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

accordions.forEach((item) => {
  item.addEventListener("click", () => {
    toggleAccordion(item);
  });
});
