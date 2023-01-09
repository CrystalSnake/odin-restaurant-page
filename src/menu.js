function getMenu() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('main-content');
  const menuItem = document.createElement('p');
  menuItem.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero sagittis libero egestas posuere non ut libero. Morbi ullamcorper euismod nulla in interdum. Maecenas sollicitudin dictum elit eu sodales. Sed sit amet lorem eget metus aliquam feugiat. Lorem ipsum.';

  const aboutOpen = document.createElement('p');
  aboutOpen.textContent = 'Working for you since 2010.';
  menuContent.appendChild(menuItem);

  return menuContent;
}

export default getMenu;
