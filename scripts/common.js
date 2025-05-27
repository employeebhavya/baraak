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
        markers: true,
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
        markers: true,
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
});
