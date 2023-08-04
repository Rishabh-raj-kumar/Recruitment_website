let main = document.querySelector("main");
let header = document.querySelector("header");

gsap.registerPlugin(ScrollTrigger);

function handleShow() {
  gsap.fromTo(
    "main,.--home_disc-bar,header",
    {
      opacity: 0,
      stagger: 1.2,
    },
    {
      opacity: 1,
      stagger: 0.3,
    }
  );
}

gsap.to("header", {
  scrollTrigger: {
    trigger: "header",
    start: "top 10px",
    toggleActions: "restart pause reverse pause",
    scrub: 2,
  },
  background: "#eeeeee",
});

gsap.to(".comment-box", {
    scrollTrigger: {
      trigger: ".--people-speak",
      start : "top 100px",
      toggleActions: "restart pause reverse pause",
      scrub: 0.3,
      pin : true,
      end : "bottom center"
    },
    opacity : 1,
    stagger : 0.3
  });

