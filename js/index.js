//nav-menu-animation
const navSlide = () => {
  const burger = document.querySelector('.nav-btn');
  const nav = document.querySelector('.header');
  const navLink = document.querySelectorAll('.nav-inner li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animation links
    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 8 + 0.2
        }s`;
      }
    });
    //burger Toggle
    burger.classList.toggle('burger-open');
  });
};
navSlide();

//fade-animation
const fade = gsap.utils.toArray('.fade');
fade.forEach((act, i) => {
  ScrollTrigger.create({
    trigger: act,
    toggleClass: 'active',
    start: 'top 80%',
    // end: 'bottom top',
    markers: false,
  });
});

//slide-animation
const reverl = gsap.utils.toArray('.cover-slide-txt');
reverl.forEach((txt, i) => {
  ScrollTrigger.create({
    trigger: txt,
    toggleClass: 'active',
    start: 'top 80%',
    end: 'bottom top',
    markers: false,
  });
});
//img-animation
const images = gsap.utils.toArray('.cover-slide-img');
images.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    toggleClass: 'active',
    start: 'top 80%',
    end: 'bottom top',
    markers: false,
  });
});
// firstview opening animation
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from('.header-side', { x: '100%', ease: 'power2.in' })
  .from('.hero-container', { x: '-100%', ease: 'elastic.out(1, 0.3)' })
  .from('.section1', { y: '100px', ease: 'bounce' });

// sprit text animation
Splitting();
const targetTxt = document.querySelectorAll('.text-animation');
const xValues = ['0%', '70%', '300%', '0%', '70%', '300%'];
const yValues = ['0%', '70%', '-100%', '0%', '70%', '-100%'];
targetTxt.forEach((current, index, array) => {
  gsap.from(current.querySelectorAll('.char'), {
    scrollTrigger: {
      trigger: current,
      start: 'top 70%',
      end: 'bottom top',
      pin: false,
      scrub: false,
    },
    opacity: 0,
    scale: 0.1,
    x: xValues[index],
    y: yValues[index],
    stagger: {
      amount: 1.5,
    },
  });
});
