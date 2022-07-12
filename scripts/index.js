const header = document.querySelector("[data-header]");
const logo = document.querySelector("[data-logo]");
const links = document.querySelectorAll("nav a");
const hamMenu = document.querySelector("[data-nav-toggle-label]");
const nav = document.querySelector("nav");
const toggle = document.querySelector("#nav-toggle");

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

var options = { rootMargin: "-90px 0px 0px 0px" };

const backgroundObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target == backgroundScroll) {
      if (!entry.isIntersecting) {
        header.classList.add("white");
        links.forEach((link) => {
          link.classList.add("white");
        });
        hamMenu.classList.add("white");
        nav.classList.add("white");
      } else {
        header.classList.remove("white");
        links.forEach((link) => {
          link.classList.remove("white");
        });
        hamMenu.classList.remove("white");
        nav.classList.remove("white");
      }
    }
  });
}, options);

document.addEventListener("scroll", () => {
  toggle.checked = false;
});

logoObserver.observe(logoScroll);
backgroundObserver.observe(backgroundScroll);
