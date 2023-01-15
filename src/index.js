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

const tabMenu = document.createElement('div');
const home = document.createElement('button');
home.textContent = 'Home';
home.addEventListener('click', (e) => {
  loadMain(homeContent());
});
const menu = document.createElement('button');
menu.textContent = 'Menu';
menu.addEventListener('click', (e) => {
  loadMain(menuContent());
});
const contacts = document.createElement('button');
contacts.textContent = 'Contacts';
contacts.addEventListener('click', (e) => {
  loadMain(contactsContent());
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
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(content);
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
