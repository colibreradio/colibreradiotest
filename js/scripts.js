/* Responsive Nav with Javascript */
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  var navbar = document.querySelector("nav");

  burger.addEventListener("click", () => {
    //Toogle Nav
    nav.classList.toggle("nav-active");

    if (window.pageYOffset <= navbar.offsetTop) {
      navbar.classList.toggle("sticky");
    }

    //Burger Animation
    burger.classList.toggle("anim-rotate");
  });

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
    }

    link.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("anim-rotate");

      if (window.pageYOffset <= navbar.offsetTop) {
        navbar.classList.toggle("sticky");
      }
    });
  });
};

navSlide();

const navTransform = () => {
  // Get the navbar
  var navbar = document.querySelector("nav");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  addStickytoNav();
  // When the user scrolls the page, execute addStickytoNav
  window.addEventListener("scroll", function (e) {
    addStickytoNav();
  });

  // Add the sticky class to the navbar when you reach its scroll position. Remove 'sticky' when you leave the scroll position
  function addStickytoNav() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
      //navbar.classList.add('shadow-sm');
    } else {
      navbar.classList.remove("sticky");
      //navbar.classList.remove('shadow-sm');
    }
  }
};

navTransform();

const scrollToTop = () => {
  const backtotop = document.querySelector("#back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      if (!backtotop.classList.contains("btn-entrance")) {
        backtotop.classList.remove("btn-exit");
        backtotop.classList.add("btn-entrance");
        backtotop.style.display = "block";
      }
    } else {
      if (backtotop.classList.contains("btn-entrance")) {
        backtotop.classList.remove("btn-entrance");
        backtotop.classList.add("btn-exit");
        setTimeout(function () {
          backtotop.style.display = "none";
        }, 250);
      }
    }
  });

  backtotop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
};

scrollToTop();
