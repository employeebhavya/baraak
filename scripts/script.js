document.addEventListener("DOMContentLoaded", function () {
  function logoAnimation() {
    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 768px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#landing",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        tl.to(".main-logo", {
          top: "6.5%",
          scale: 0.5,
          transformOrigin: "top center",
          ease: "power1.inOut",
        }).to(
          ".landing-content",
          {
            opacity: 0,
            scale: 0.85,
            ease: "power1.out",
            duration: 0.5,
          },
          0
        );
      },

      // Mobile
      "(max-width: 767px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#landing",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        tl.to(".main-logo", {
          top: "4.3%",
          right: "20%", // mobile-only value
          scale: 0.5,
          transformOrigin: "top center",
          ease: "power1.inOut",
        }).to(
          ".landing-content",
          {
            opacity: 0,
            scale: 0.85,
            ease: "power1.out",
            duration: 0.5,
          },
          0
        );
      },
    });
  }
  logoAnimation();

  function horizontalScroll() {
    // Check if it's not mobile (desktop)
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return; // Exit if mobile

    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".card");
    const cardContainer = document.querySelector(".card-container");
    const progress = document.querySelector(".progress");

    // Calculate dimensions
    const cardWidth =
      cards[0].offsetWidth + parseFloat(getComputedStyle(cardContainer).gap);
    const containerWidth = cardWidth * cards.length - cardWidth; // Always subtract one card width for desktop
    const scrollDistance = containerWidth;

    // Set container width
    cardContainer.style.width = `${cardWidth * cards.length}%`;

    // Create the horizontal scroll animation
    let scrollTween = gsap.to(cardContainer, {
      x: () => -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: "#services",
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Update progress bar
          progress.style.width = `${self.progress * 100}%`;

          // Update active cards based on scroll position
          const scrollPos = self.scroll();
          const activeIndex = Math.min(
            Math.floor(
              (scrollPos / scrollDistance) * (cards.length - cardsToShow + 1)
            ),
            cards.length - cardsToShow
          );
        },
      },
    });

    // Handle window resize
    window.addEventListener("resize", function () {
      // Recheck if it's still desktop after resize
      const stillDesktop = !window.matchMedia("(max-width: 767px)").matches;
      if (!stillDesktop) return;

      // Recalculate dimensions
      const newCardWidth =
        cards[0].offsetWidth + parseFloat(getComputedStyle(cardContainer).gap);
      const newContainerWidth = newCardWidth * cards.length - newCardWidth;
      const newScrollDistance = newContainerWidth;

      // Update container width
      cardContainer.style.width = `${newCardWidth * cards.length}%`;

      // Update scroll trigger
      scrollTween.scrollTrigger.end = `+=${newScrollDistance}`;
      scrollTween.scrollTrigger.refresh();
    });
  }
  horizontalScroll();

  function videoZoomout() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#videoZoom-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    tl.to("#video-col5 video", {
      scale: 1,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        "#video-col1",
        {
          left: "0%",
          top: "0%",
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#video-col2",
        {
          top: "0%",
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#video-col3",
        {
          top: "0%",
          right: "0%",
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#video-col4",
        {
          left: "0%",
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#video-col6",
        {
          right: "0%",
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#video-col7",
        {
          left: "0%",
          bottom: "0%",
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#video-col8",
        {
          bottom: "0%",
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#video-col9",
        {
          bottom: "0%",
          right: "0%",
          duration: 1,
          ease: "power2.out",
        },
        "<"
      );
  }
  videoZoomout();

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

  window.addEventListener("resize", function () {
    // Only reinitialize if we're in desktop mode
    if (window.matchMedia("(min-width: 768px)").matches) {
      // Kill any existing ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
      // Reinitialize
      testimonialScroll();
    }
  });

  function aboutAnimation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.from(".about-content > *", {
      duration: 0.5,
      opacity: 0,
      y: 40,
      ease: "power2.out",
      stagger: 0.1,
    }).from(
      ".about-img",
      {
        duration: 0.5,
        opacity: 0,
        y: 40,
        ease: "power2.out",
      },
      "<"
    );
  }
  aboutAnimation();

  function expAnimation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.from(".exp-content > *", {
      duration: 0.5,
      opacity: 0,
      y: 40,

      stagger: 0.1,
    }).from(
      ".exp-image",
      {
        duration: 0.5,
        opacity: 0,
        y: 40,
      },
      "<"
    );
  }
  expAnimation();

  function storyAnimation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#our-story",
        start: "top 90%",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.from(".story-content > *", {
      duration: 0.5,
      // opacity: 0,
      y: 40,
      stagger: 0.1,
    }).from(
      ".story-img",
      {
        duration: 0.5,
        opacity: 0,
        y: 40,
      },
      "<"
    );
  }
  storyAnimation();

  function testiSlider() {
    document.addEventListener("DOMContentLoaded", function () {
      const testimonials = document.querySelectorAll(".testimonial");
      let currentIndex = 0;

      function showNextTestimonial() {
        testimonials[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add("active");
      }

      // Change testimonial every 5 seconds
      setInterval(showNextTestimonial, 3000);
    });
  }
  testiSlider();
});
