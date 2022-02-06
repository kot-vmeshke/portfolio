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
//translate
const internationalization = () => {
  const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'phone': 'Phone',
      'message': 'Message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'phone': 'Телефон',
      'message': 'Сообщение'
    }
  }

  const getTranslate = (lang) => {
    const i18s = document.querySelectorAll('[data-i18]');
    i18s.forEach(item => {
      item.textContent = i18Obj[lang][item.dataset.i18];
      if (item.placeholder) {
        item.placeholder = i18Obj[lang][item.dataset.i18];
        item.textContent = '';
      }
    })
  }

  const lang = document.querySelector('.language');
  const btnEn = lang.querySelector('.english');
  const btnRu = lang.querySelector('.russian');
  

  lang.addEventListener('click', (event) => {
    if (event.target.dataset.language === 'en') {
      btnRu.classList.remove('language-active');
      btnEn.classList.add('language-active');
    }
    if (event.target.dataset.language === 'ru') {
      btnEn.classList.remove('language-active');
      btnRu.classList.add('language-active');
    }
    getTranslate(event.target.dataset.language);
  })
}

internationalization();
changeImg();
openMenu();