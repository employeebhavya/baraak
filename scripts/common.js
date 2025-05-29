document.addEventListener("DOMContentLoaded", function () {
  function menu() {
    const headerMenu = document.querySelector(".header-menu");
    const closeMenu = document.querySelector(".close");
    const menu = document.querySelector("#menu");
    const headerLink = document.querySelectorAll(".headernava");

    const tl = gsap.timeline({
      paused: true,
    });

    tl.from("#menu", {
      left: "-100%",
      duration: 0.5,
      delay: 0.5,
      ease: "power2.out",
    })
      .from(".close > *", {
        opacity: 0,
        duration: 0.3,
        y: 20,
        ease: "power2.out",
      })
      .from(".menu-img", {
        opacity: 0,
        duration: 0.3,
        y: 20,
        ease: "power2.out",
      })
      .from(
        ".nav > ul > *",
        {
          duration: 0.3,
          delay: 0.3,
          opacity: 0,
          y: 10,
          ease: "power2.out",
          stagger: 0.2,
        },
        "<0.2"
      )
      .from(".logo-scroll > *", {
        opacity: 0,
        duration: 0.3,
        y: 20,
        ease: "power2.out",
        stagger: 0.2,
      });

    headerMenu.addEventListener("click", () => {
      tl.play();
    });
    closeMenu.addEventListener("click", () => {
      tl.reverse();
    });
    headerLink.forEach((link) => {
      link.addEventListener("click", () => {
        tl.reverse();
      });
    });
  }
  menu();
  function topbtn() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show/hide button after 200px scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    // Smooth scroll to top
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  topbtn();
  function reservationMenu() {
    const openButton = document.querySelectorAll(".header-button");
    const closeButton = document.querySelector("#close-form");
    const formReservation = document.querySelector(".reservation-form");

    openButton.forEach((link) =>
      link.addEventListener("click", function () {
        gsap.to(formReservation, {
          left: "0",
          duration: 1,
        });
      })
    );
    closeButton.addEventListener("click", function () {
      gsap.to(formReservation, {
        left: "-100%",
        duration: 1,
      });
    });
  }
  reservationMenu();

  function aboutInsta() {
    const instaCol = document.querySelectorAll(".about-insta-main-col");

    instaCol.forEach((col) => {
      const instaHover = col.querySelector(".about-insta-hover");
      if (!instaHover) return;
      col.addEventListener("mouseenter", function () {
        gsap.to(instaHover, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      col.addEventListener("mouseleave", function () {
        gsap.to(instaHover, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  }
  aboutInsta();

  function aboutAnimation() {
    const tl = gsap.timeline();
    tl.from(".about-page-landing", {
      duration: 0.5,
      opacity: 0,
      y: "-100%",
      ease: "power2.out",
    })
      .from(".about-page-landing h1", {
        duration: 0.5,
        opacity: 0,
        y: 50,
        ease: "power2.out",
      })
      .from(".about-page-landing p", {
        duration: 0.5,
        opacity: 0,
        y: 50,
        ease: "power2.out",
      });
  }
  aboutAnimation();

  function aboutInnerAnimations() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutus-sec",
        start: "top 100%",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    tl.from(".aboutus-sec-col1-list-items li", {
      duration: 0.5,
      opacity: 0,
      x: -50,
      ease: "power2.out",
      stagger: 0.2,
    }).from(
      ".aboutus-sec-col2 p",
      {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        x: 50,
        ease: "power2.out",
        stagger: 0.2,
      },
      "<"
    );
  }
  aboutInnerAnimations();

  function aboutInstaAnimations() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-insta",
        start: "top 100%",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    tl.from(".about-insta-heading h2", {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      x: -50,
      ease: "power2.out",
    }).from(
      ".about-insta-main div",
      {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        x: 50,
        ease: "power2.out",
        stagger: 0.2,
      },
      "<"
    );
  }
  aboutInstaAnimations();

  function whatsOnANimation() {
    const tl = gsap.timeline();

    tl.from(".whatson-heading", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.1,
    }).from(".whatson-page-main div", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.1,
    });
  }
  whatsOnANimation();

  function maptoggleAnimation() {
    const toggleImage = document.querySelector(".toggle-img");
    const col1 = document.querySelector(".map-sec-col-1");
    const col2 = document.querySelector(".map-sec-col-2");

    toggleImage.addEventListener("click", function (params) {
      col1.classList.toggle("active");
      col2.classList.toggle("active");
    });
  }
  maptoggleAnimation();

  function findUsAnimation1() {
    gsap.from(".map-sec", {
      opacity: 1,
      duration: 0.5,
      y: 100,
      delay: 0.1,
    });
  }
  findUsAnimation1();

  function findUsAnimation2() {
    gsap.from(".find-loc-col-1", {
      opacity: 0,
      duration: 0.5,
      x: -100,
      delay: 0.1,
      scrollTrigger: {
        trigger: ".findsUslocation",
        start: "top 80%",
        end: "bottom top",
      },
    });
    gsap.from(".find-loc-col-2", {
      opacity: 0,
      duration: 0.5,
      x: 100,
      delay: 0.1,
      scrollTrigger: {
        trigger: ".findsUslocation",
        start: "top 80%",
        end: "bottom top",
      },
    });
  }
  findUsAnimation2();
});
function testimonialScroll() {
  const progressBar = document.getElementById("testi-progress");

  // Check if it's desktop (min-width: 768px)
  if (window.matchMedia("(min-width: 768px)").matches) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          progressBar.value = self.progress * progressBar.max;
        },
      },
    });

    tl.to(".testimonials-main", {
      x: "-100%",
      duration: 1,
      ease: "none",
    });
  }
}
testimonialScroll();

function bookingHeader() {
  gsap.from(".booking-page-landing", {
    opacity: 0,
    duration: 0.5,
    y: 100,
    delay: 0.1,
  });
}
bookingHeader();

function bookReservationForm() {
  gsap.from(".book-reservation-col-1", {
    opacity: 0,
    duration: 0.5,
    x: -100,
    delay: 0.1,
    scrollTrigger: {
      trigger: "#book-reservation",
      start: "top 80%",
      end: "bottom top",
    },
  });
  gsap.from(".book-reservation-col-2", {
    opacity: 0,
    duration: 0.5,
    x: 100,
    delay: 0.1,
    scrollTrigger: {
      trigger: "#book-reservation",
      start: "top 80%",
      end: "bottom top",
    },
  });
}
bookReservationForm();

function privateDining() {
  gsap.from(".private-dining-col-1", {
    opacity: 0,
    duration: 0.5,
    x: -100,
    delay: 0.1,
    scrollTrigger: {
      trigger: "#private-dining",
      start: "top 80%",
      end: "bottom top",
    },
  });
  gsap.from(".private-dining-col-2", {
    opacity: 0,
    duration: 0.5,
    x: 100,
    delay: 0.1,
    scrollTrigger: {
      trigger: "#private-dining",
      start: "top 80%",
      end: "bottom top",
    },
  });
}
privateDining();
