

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true, 
          
          },
        }
      );
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-item");
    if (!items.length) return; 

    const observer = new IntersectionObserver((entries) =>
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const index = [...items].indexOf(entry.target);
            entry.target.style.transitionDelay = `${ 0.15}s`;
            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        })
    , { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});




const VtoolTitles = document.querySelectorAll('.v-tools-slide-name p');

if (VtoolTitles.length) {
  VtoolTitles.forEach(el => {
    const VmaxLength = 15;
    const Vtext = el.textContent.trim();

    if (Vtext.length > VmaxLength) {
      el.textContent = Vtext.slice(0, VmaxLength) + '...';
    }
  });
}


const VChoiceTitles = document.querySelectorAll('.v-choice-item-text');

if (VChoiceTitles.length) {
  VChoiceTitles.forEach(el => {
    const VmaxLength = 22;
    const Vtext = el.textContent.trim();

    if (Vtext.length > VmaxLength) {
      el.textContent = Vtext.slice(0, VmaxLength) + '...';
    }
  });
}
