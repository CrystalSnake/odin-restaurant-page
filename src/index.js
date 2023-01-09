import homeContent from './home';
import './style.css';

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
home.addEventListener('click', (e) => {
  loadMain(homeContent());
});
const menu = document.createElement('li');
menu.textContent = 'Menu';
menu.addEventListener('click', (e) => {
  loadMain();
});
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
