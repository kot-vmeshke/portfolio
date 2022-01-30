const openMenu = () => {
  const menuOpen = document.querySelector('.menu-open');
  const menuClose = document.querySelector('.menu-close');
  const headerNav = document.querySelector('.header-nav');
  const navList = document.querySelector('.header-nav__list');

  const open = () => {
    headerNav.classList.add('adaptive-nav');
    menuClose.style.display = 'block';
  }

  const close = () => {
    headerNav.classList.remove('adaptive-nav');
    menuClose.style.display = 'none';
  }

  menuOpen.addEventListener('click', open);
  menuClose.addEventListener('click', close);

  headerNav.addEventListener('click', (event) => {
    if (event.target.classList.contains('header-nav__link')) {
      close();
    }
    const beside = event.composedPath().includes(navList);
    if (!beside) {
      close();
    }
  })
}
openMenu();