import './style.css';

console.log('Hello world!');

const container = document.createElement('div');
container.setAttribute('id', 'content');

const header = document.createElement('header');
const logo = document.createElement('h1');
logo.textContent = 'Asian Restaurant';
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

document.body.appendChild(container);
