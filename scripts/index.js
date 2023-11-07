const accordions = document.querySelectorAll(".accordion-item");

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
