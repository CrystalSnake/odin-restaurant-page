import './style.css';
import Promo from '/home/crystalsnake/repos/odin-restaurant-page/src/images/nature-white-restaurant-dish-meal-food-760717-pxhere.com.jpg';
import '@fortawesome/fontawesome-free/js/brands';

console.log('Hello world!');

const container = document.createElement('div');
container.setAttribute('id', 'content');

//Header section
const header = document.createElement('header');
const logo = document.createElement('h1');
logo.textContent = 'Hikari';
const tabMenu = document.createElement('div');
const ul = document.createElement('ul');
const home = document.createElement('li');
home.textContent = 'Home';
const menu = document.createElement('li');
menu.textContent = 'Menu';
const contacts = document.createElement('li');
contacts.textContent = 'Contacts';
ul.appendChild(home);
ul.appendChild(menu);
ul.appendChild(contacts);
tabMenu.appendChild(ul);
header.appendChild(logo);
header.appendChild(tabMenu);

container.appendChild(header);

//Main section
const main = document.createElement('main');
const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
const about = document.createElement('p');
about.textContent =
  'At the hikari restaurant, diners can enjoy not only our exquisite range of dishes, but also a cozy atmosphere and caring service. And if it is not possible to visit the restaurant, then we will deliver your dishes to your home or office.';
const promo = document.createElement('img');
promo.classList.add('promo');
promo.src = Promo;
const aboutOpen = document.createElement('p');
aboutOpen.textContent = 'Working for you since 2010.';
mainContent.appendChild(about);
mainContent.appendChild(promo);
mainContent.appendChild(aboutOpen);
main.appendChild(mainContent);
container.appendChild(main);

//Footer section
const footer = document.createElement('footer');
const copy = document.createElement('p');
copy.textContent = 'Copyright © 2023 CrystalSnake';
const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/CrystalSnake';
githubLink.innerHTML = '<i class="fa-brands fa-github"></i>';
footer.appendChild(copy);
footer.appendChild(githubLink);
container.appendChild(footer);

document.body.appendChild(container);
