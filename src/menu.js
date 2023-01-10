import Yakisoba from './images/asian-dish-meal-food-meat-cuisine-774746-pxhere.com.jpg';
import Rolls from './images/bowl-dish-food-green-produce-vegetable-1331506-pxhere.com.jpg';
import Ramen from './images/dish-meal-food-breakfast-cuisine-soup-729807-pxhere.com.jpg';
import ShrimpFriedRice from './images/sea-white-restaurant-isolated-asian-dish-819397-pxhere.com.jpg';
import menu from './menu.json';
console.log(menu);
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
