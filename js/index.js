//nav-menu-animation
const navSlide = () => {
  const burger = document.querySelector('.nav-btn');
  const nav = document.querySelector('.header');
  const navLink = document.querySelectorAll('.nav-outer li');

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
        console.log(index / 8 + 0.2);
      }
    });
    //burger Toggle
    burger.classList.toggle('burger-open');
  });
};
navSlide();

//slide-animation
const reverl = gsap.utils.toArray('.cover-slide-txt');
reverl.forEach((txt, i) => {
  ScrollTrigger.create({
    trigger: txt,
    toggleClass: 'active',
    start: 'top 80%',
    end: 'top 10%',
    markers: true,
  });
});
//img-animation
const images = gsap.utils.toArray('.cover-slide-img');
images.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'top 10%',
    markers: true
  })
});