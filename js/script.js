window.addEventListener("load", () => {
  document.body.style.visibility = "visible";
});

gsap.registerPlugin(ScrollTrigger);




gsap.from(".fto", {
x: -50,
  opacity: 0.1,
  duration: 2,
  stagger: 0.2
});

gsap.from(".sobre-mi", {
  x: 50,
  opacity: 0,
  duration: 1,
  stagger: 1
});

gsap.from(".sobre-mi-det-titulo", {
  scrollTrigger: {
    trigger: "#sobre-mi-det",
    start: "top 85%"
  },
  y: 30,
  opacity: 0,
  duration: 0.8
});

