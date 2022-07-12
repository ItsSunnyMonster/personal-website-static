const header = document.querySelector("[data-header]");
const logo = document.querySelector("[data-logo]");
const links = document.querySelectorAll("nav a");

const backgroundScroll = document.querySelector(
  "[data-background-scroll-detector]"
);
const logoScroll = document.querySelector("[data-logo-scroll-detector]");

const logoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target == logoScroll) {
      if (!entry.isIntersecting) {
        logo.classList.add("active");
      } else {
        logo.classList.remove("active");
      }
    }
  });
}, {});

const backgroundObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.target == backgroundScroll) {
        if (!entry.isIntersecting) {
          header.classList.add("white");
          links.forEach((link) => {
            link.classList.add("white");
          });
        } else {
          header.classList.remove("white");
          links.forEach((link) => {
            link.classList.remove("white");
          });
        }
      }
    });
  },
  { rootMargin: "-90px 0px 0px 0px" }
);

logoObserver.observe(logoScroll);
backgroundObserver.observe(backgroundScroll);
