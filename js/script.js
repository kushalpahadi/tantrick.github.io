"use strict";

const navtimeline = gsap.timeline(); //stacking animations

//nav logo
navtimeline.from(".nav img", {
  delay: 0.5,
  opacity: 0,
});
// on load animation
navtimeline.from(".nav h4", {
  duration: 0.3,
  opacity: 0,
  y: -10,
  stagger: 0.25,
});

// page 1 h1 animation

gsap.from([".page1 h1", ".page1 h2", ".page1 p"], {
  opacity: 0,
  duration: 1,
  y: -20,
  stagger: 0.25,
});

//scroll trigger nav fixed
gsap.to(".nav", {
  backgroundColor: "rgb(29,140,248)",
  height: 110,

  duration: 0.4,

  scrollTrigger: {
    trigger: ".page2",
    // markers: true,
    start: "5% bottom", //top 5% of page 2 intersect bottom of vp
    end: "10% bottom",
    scrub: 1,
  },
});

// background of main

gsap.to(".main", {
  background:
    "linear-gradient(180deg, rgba(23,25,65,1) 14%, rgba(23,25,65,1) 100%)",

  scrollTrigger: {
    trigger: ".page2",
    // markers: true,
    start: "top 75%", //top 29% of page 2 intersect top85% of vp
    end: "top 80%",
    scrub: 5,
  },
});

//cursor
const crsr = document.querySelector(".cursor");
const crsrblur = document.querySelector(".cursorblur");

document.addEventListener("pointermove", function (e) {
  //   console.log(e); //gives mouse event
  //   console.log(e.x, e.y); //mouse posiiton x ang y ( left top)

  //   crsr.style.left = e.x - crsr.getBoundingClientRect().height / 2 + "px";
  //   crsr.style.top = e.y - crsr.getBoundingClientRect().height / 2 + "px";
  //   crsrblur.style.left =
  //     e.x - crsrblur.getBoundingClientRect().height / 2 + "px";
  //   crsrblur.style.top = e.y - crsrblur.getBoundingClientRect().height / 2 + "px";

  gsap.to(crsr, {
    x: e.x + 10 + "px",
    y: e.y + 10 + "px",
    delay: 0.1,
  });

  gsap.to(crsrblur, {
    x: e.x - crsrblur.getBoundingClientRect().height / 2 + "px",
    y: e.y - crsrblur.getBoundingClientRect().height / 2 + "px",
    delay: 0.1,
  });
});

//vannila tilt
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
});

//cursor effect for h4 of nav

const navh4 = document.querySelectorAll(".nav h4");

navh4.forEach(function (h4) {
  h4.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 1.8,
      border: "1px solid white",
      backgroundColor: " transparent",
    });
  });
  h4.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 1,
      border: "none",
      backgroundColor: "rgb(29, 140, 248)",
    });
  });
});

//scroll trigger about us elements

gsap.from(".aboutus img , .aboutus .aboutus-in", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.33,

  scrollTrigger: {
    trigger: ".page2",
    start: "300px bottom",
    end: "+=10 bottom",
    scrub: 2,
    pin: true,
  },
});

gsap.from(".scroller", {
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: ".aboutus",
    start: "top center",
    scrub: 1,
  },
});

gsap.from(".card", {
  opacity: 0,
  scale: 0.3,
  stagger: 0.33,

  scrollTrigger: {
    trigger: ".aboutus",
    start: "-30% 100%",

    scrub: 2,
  },
});

gsap.from(".colon1", {
  y: -70,
  x: -70,
  duration: 1,
  scale: 2,
  scrollTrigger: {
    trigger: ".quote-container",
    start: "-30% 40%",
    scrub: 1,
  },
});

gsap.from(".colon2", {
  y: 70,
  x: 70,
  duration: 1,
  scale: 2,
  scrollTrigger: {
    trigger: ".quote-container",
    start: "-30% 100%",
    scrub: 1,
  },
});
