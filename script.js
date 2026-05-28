// MOBILE MENU

const menuBtn = document.getElementById('menuBtn');

const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {

  navLinks.classList.toggle('active');

});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target){

      target.scrollIntoView({
        behavior:'smooth'
      });

      navLinks.classList.remove('active');

    }

  });

});

// SCROLL ANIMATION

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = '1';

      entry.target.style.transform = 'translateY(0px)';

    }

  });

},{
  threshold:0.1
});

const elements = document.querySelectorAll(
  '.apartment-card, .feature-box, .stay-card'
);

elements.forEach(el => {

  el.style.opacity = '0';

  el.style.transform = 'translateY(40px)';

  el.style.transition = 'all 0.8s ease';

  observer.observe(el);

});
