// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".box", {
    x: 500,
    rotate: 360,
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box",
      start: "top center",
      markers: true,
    },
  });
});