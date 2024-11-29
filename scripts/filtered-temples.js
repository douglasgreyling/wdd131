const hamburger = document.getElementById('hamburger');
const menu = document.getElementsByClassName('menu')[0];
const heading = document.getElementById('heading');
const header = document.querySelector('header');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('align-self-end');
  heading.classList.toggle('hide');
  header.classList.toggle('full-width');
  nav.classList.toggle('full-width');

  if (menu.classList.contains('show')) {
    hamburger.innerHTML = 'X';
  } else {
    hamburger.innerHTML = '&#9776;';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    menu.classList.remove('show');
    hamburger.innerHTML = '&#9776;';
    hamburger.classList.remove('align-self-end');
    heading.classList.remove('hide');
    header.classList.remove('full-width');
    nav.classList.remove('full-width');
  }
});

const element = document.getElementsByClassName('temples')[0];
const urlParams = new URLSearchParams(window.location.search);
const filter = urlParams.get('filter') || 'all';

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, Auguest, 24-25",
    area: 19184,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-51296.jpg"
  },
  {
    templeName: "Preston England",
    location: "Preston, Englang",
    dedicated: "1998, June, 7-10",
    area: 69630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-50935.jpg"
  },
];

const filteredTemples = temples.filter(temple => {
  if (filter === 'old') {
    return parseInt(temple.dedicated.split(', ')[0]) < 1900;
  } else if (filter === 'new') {
    return parseInt(temple.dedicated.split(', ')[0]) > 2000;
  } else if (filter === 'large') {
    return temple.area > 90000;
  } else if (filter === 'small') {
    return temple.area < 10000;
  } else {
    return true;
  }
});

filteredTemples.forEach(temple => {
  const card = document.createElement('div');

  card.classList.add('card');

  card.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    <div>
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Size: ${temple.area} sq ft</p>
    </div>
  `;

  element.appendChild(card);
});