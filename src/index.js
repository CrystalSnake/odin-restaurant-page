import homeContent from './home';
import menuContent from './menu';
import contactsContent from './contacts';
import './style.css';

import '@fortawesome/fontawesome-free/js/brands';

const container = document.createElement('div');
container.setAttribute('id', 'content');

//Header section
const header = document.createElement('header');
const logo = document.createElement('h1');
logo.textContent = 'Hikari';

function menuActiveChange(button) {
  const act = document.querySelector('.active');
  act.classList.remove('active');
  button.classList.add('active');
}

const tabMenu = document.createElement('div');
const home = document.createElement('button');
home.classList.add('menu-button', 'active');
home.textContent = 'Home';
home.addEventListener('click', (e) => {
  loadMain(homeContent());
  menuActiveChange(home);
});
const menu = document.createElement('button');
menu.classList.add('menu-button');
menu.textContent = 'Menu';
menu.addEventListener('click', (e) => {
  loadMain(menuContent());
  menuActiveChange(menu);
});
const contacts = document.createElement('button');
contacts.classList.add('menu-button');
contacts.textContent = 'Contacts';
contacts.addEventListener('click', (e) => {
  loadMain(contactsContent());
  menuActiveChange(contacts);
});
tabMenu.appendChild(home);
tabMenu.appendChild(menu);
tabMenu.appendChild(contacts);
header.appendChild(logo);
header.appendChild(tabMenu);

container.appendChild(header);

//Main section
const main = document.createElement('main');

function loadMain(content) {
  main.textContent = '';
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');
  mainContainer.appendChild(content);
  main.appendChild(mainContainer);
}

container.appendChild(main);

//Footer section
function getFooter() {
  const footer = document.createElement('footer');
  const copy = document.createElement('p');
  copy.textContent = 'Copyright © 2023 CrystalSnake';
  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/CrystalSnake';
  githubLink.innerHTML = '<i class="fa-brands fa-github"></i>';
  footer.appendChild(copy);
  footer.appendChild(githubLink);
  container.appendChild(footer);
}

getFooter();

document.body.appendChild(container);

loadMain(homeContent());
