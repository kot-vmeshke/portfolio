// adaptive menu
const openMenu = () => {
  const menuOpen = document.querySelector('.menu-open');
  const menuClose = document.querySelector('.menu-close');
  const headerNav = document.querySelector('.header-nav');
  const navList = document.querySelector('.header-nav__list');

  const close = () => {
    headerNav.classList.remove('adaptive-nav');
    menuClose.style.display = 'none';
    document.removeEventListener('keydown', (event) => {
      if (event.key === ('Escape' || 'Esc')) {
        event.preventDefault();
        close();
      }
    })
  }

  const open = () => {
    headerNav.classList.add('adaptive-nav');
    menuClose.style.display = 'block';
    document.addEventListener('keydown', (event) => {
      if (event.key === ('Escape' || 'Esc')) {
        event.preventDefault();
        close();
      }
    })
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
//change image
const changeImg = () => {
  const buttonsWpar = document.querySelector('.buttons-wrap');
  const buttons = buttonsWpar.querySelectorAll('.btn');
  const imagesWrap = document.querySelector('.image-wrap');
  const images = imagesWrap.querySelectorAll('.portfolio-img');
  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  const preloadImg = () => {
    seasons.forEach(season => {
      for(let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${season}/${i}.jpg`;
      }
    })
  }
  preloadImg();

  buttonsWpar.addEventListener('click', (event) => {
    let season = event.target.dataset.season;
    if (event.target.classList.contains('btn-outline')) {
      buttons.forEach(btn => {
        btn.classList.remove('btn-fill');
        btn.classList.add('btn-outline');
      });

      event.target.classList.remove('btn-outline');
      event.target.classList.add('btn-fill');

      images.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
  })
}
changeImg();
openMenu();