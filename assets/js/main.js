const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

  document.addEventListener('DOMContentLoaded', function() {
    const toRotate = ["Fullstack Developer", "Web Developer", "UI/UX Designer", "Network Administrator"];
    const period = 2000;  // Faster period for switching roles
    let loopNum = 0;
    let isDeleting = false;
    let text = '';
    let typingSpeed = 200;  // Consistent typing speed
    let deletingSpeed = 50; // Fast deleting speed

    function tick() {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        text = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        document.getElementById('dynamicText').innerHTML = text;

        let delta = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && text === fullText) {
            isDeleting = true;
            delta = period; // Pause at full text before deleting
        } else if (isDeleting && text === '') {
            isDeleting = false;
            loopNum++;
            delta = typingSpeed;
        }

        setTimeout(tick, delta);
    }

    tick();
});



// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});
// qualitifaction

// Add event listener to the tabList
const tabList = document.querySelector(".resume__tablist");
tabList.addEventListener("click", (e) => {
  const tabIndex = e.target.dataset.tab;
  if (!tabIndex) return;

  // Toggle active class on tabs
  const tabs = document.querySelectorAll("[data-tab]");
  Array.from(tabs).forEach((tab) => {
    if (tab.dataset.tab === tabIndex) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Toggle active class on panels
  const activePanel = document.querySelector(".panel__grid.active");
  const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
  
  if (activePanel.dataset.panel === tabIndex) return;
  activePanel.classList.add("close");
  activePanel.addEventListener(
    "animationend",
    (e) => {
      activePanel.classList.remove("active");
      activePanel.classList.remove("close");
      toActivePanel.classList.add("active");
    },
    { once: true }
  );
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

tabList.addEventListener("click", (e) => {
  const tabIndex = e.target.dataset.tab;
  if (!tabIndex) return;

  const tabs = document.querySelectorAll("[data-tab]");
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabIndex);
  });

  const activePanel = document.querySelector(".panel__grid.active");
  const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);

  if (activePanel && activePanel.dataset.panel === tabIndex) return;

  if (activePanel) {
    activePanel.classList.remove("active");
    activePanel.classList.add("closing");
    activePanel.addEventListener(
      "animationend",
      () => {
        activePanel.classList.remove("closing");
        activePanel.style.display = "none";
        toActivePanel.classList.add("active");
        toActivePanel.style.display = "grid";
      },
      { once: true }
    );
  } else {
    toActivePanel.classList.add("active");
    toActivePanel.style.display = "grid";
  }
});
  

 

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
});

// Initialize ScrollReveal
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
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
var Swiper = new Swiper(".mySwiper", {
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

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const responseMessage = document.getElementById('responseMessage');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Collect form data
    const formData = new FormData(contactForm);

    // Simulate form submission (replace with actual submission logic)
    // In a real scenario, this would be handled by a server-side script like PHP
    // Here we're just displaying a message based on the form data
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Display a response message
    responseMessage.innerHTML = `Thank you, ${name}! Your message (${message}) has been received at ${email}.`;

    // Optionally, you can clear the form after submission
    contactForm.reset();
  });
});
// contact form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const responseMessage = document.getElementById('responseMessage');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      }).then(response => response.json()).then(data => {
          if (data.success) {
              responseMessage.innerText = 'Email sent successfully!';
              responseMessage.style.color = 'green';
              form.reset();
          } else {
              responseMessage.innerText = 'Oops! Something went wrong. Please try again.';
              responseMessage.style.color = 'red';
          }
      }).catch(error => {
          responseMessage.innerText = 'Oops! Something went wrong. Please try again.';
          responseMessage.style.color = 'red';
      });
  });
});
// Resume download functionality
const downloadResume = document.getElementById('downloadResume');

downloadResume.addEventListener('click', function(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = './Mbasa_Mpohlolo_CV.docx';  // Update with the correct relative or absolute path to your resume file
    link.download = 'Mbasa_Mpohlolo_CV.docx';  // Update with the desired file name and correct extension
    document.body.appendChild(link);  // Append the link to the body to make it clickable
    link.click();
    document.body.removeChild(link);  // Remove the link after clicking
});



