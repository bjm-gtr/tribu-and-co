console.log("Hello world")

// ************* Menu-burger

const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('#main-menu');
let logo = document.querySelector('.logo-menu');

function burgerMenu() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
    if(open) {
    document.body.classList.remove('no-scroll');
    logo.classList.remove('logo-menu-open');
    } else {
    document.body.classList.add('no-scroll');
    logo.classList.add('logo-menu-open');
    }
} // burgerMenu

toggleMenu.addEventListener('click', burgerMenu);


// ************* Slider

var splide = new Splide( '#splide', {
  mediaQuery: 'min',
  perPage: 1,
  gap: 20,
  breakpoints: {
      576: {
          perPage: 2,
      },
      1024: {
          perPage: 3,
      }
  },
  rewind : true,
  width : '90vw',
} );

splide.mount();
