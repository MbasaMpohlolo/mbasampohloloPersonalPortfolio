const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");


// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Testimonial Slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

/*======== scroll reveal ====*/
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
  origin: 'top'
});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, contact form', {
  origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img img', {
  origin: 'left'
});
ScrollReveal().reveal('.home-content h3, .home-content p .about-content', {
  origin: 'right'
});

/*MIXIT UP PLUGIN*/
var containerEl = document.querySelector(".mix_container");
var mixer = mixitup(containerEl, {
  selectors: {
    control: "[our-mixitup-control]",
  },
});


// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
  ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
  {
    delay: 500,
    interval: 100,
  }
);

sr.reveal(".qualification__footer-text, .contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });

