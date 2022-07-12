const header = document.querySelector("[data-header]");
const logo = document.querySelector("[data-logo]");
const links = document.querySelectorAll("nav a");

const backgroundScroll = document.querySelector(
  "[data-background-scroll-detector]"
);
const logoScroll = document.querySelector("[data-logo-scroll-detector]");

const options = {
  rootMargin: "-90px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target == logoScroll) {
      if (!entry.isIntersecting) {
        header.classList.add("white");
        links.forEach((element) => {
          element.classList.add("white");
        });
        logo.classList.add("active");
      } else {
        header.classList.remove("white");
        links.forEach((element) => {
          element.classList.remove("white");
        });
        logo.classList.remove("active");
      }
    }
  });
}, options);

observer.observe(backgroundScroll);
observer.observe(logoScroll);
