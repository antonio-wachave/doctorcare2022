//PARA RESOVER O PROBLEMA DE SCROLL 
window.addEventListener("scroll", onScroll);

onScroll();
//FUNCAO PARA CAUSAR UM EFEITO QUANDO FAZERMOS O SCROLL NA PAGINA;
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
};


function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');

  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}


function showNavOnScroll(){
  const navigation = document.querySelector('nav#navigation');
  (scrollY > 0) ? navigation.classList.add('scroll') :navigation.classList.remove('scroll');

};

function showBackToTopButtonOnScroll(){
  const backToTopButtton = document.querySelector('a#backToTopButton');
  (scrollY > 500) ? backToTopButtton.classList.add('show') : backToTopButtton.classList.remove('show');
};

//FUNCAO PARA ABRIR O MENU-EXPANDED;
function openMenu(){
  document.body.classList.add('menu-expanded');
};

//FUNCAO PARA FECHAR O MENU-EXPANDED;
function closeMenu(){
  document.body.classList.remove('menu-expanded');
};

ScrollReveal({ 
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('#home, #home img, #home .stats, #services, #services .header, #services .card, #about, #about header, #about .content');

