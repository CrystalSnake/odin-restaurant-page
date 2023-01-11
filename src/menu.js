import Yakisoba from './images/asian-dish-meal-food-meat-cuisine-774746-pxhere.com.jpg';
import Rolls from './images/bowl-dish-food-green-produce-vegetable-1331506-pxhere.com.jpg';
import Ramen from './images/dish-meal-food-breakfast-cuisine-soup-729807-pxhere.com.jpg';
import ShrimpFriedRice from './images/sea-white-restaurant-isolated-asian-dish-819397-pxhere.com.jpg';
import menu from './menu.json';

function getDishCard(name, content) {
  const dishCard = document.createElement('div');
  dishCard.classList.add('dish-card');
  const dishName = document.createElement('p');
  dishName.classList.add('dish-name');
  dishName.textContent = name;
  const dishContent = document.createElement('p');
  dishContent.classList.add('dish-content');
  dishContent.textContent = content;
  dishCard.appendChild(dishName);
  dishCard.appendChild(dishContent);

  return dishCard;
}

function getMenu() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('main-content');
  for (let dishItem of menu.dishes) {
    const dish = getDishCard(dishItem.name, dishItem.content);
    menuContent.appendChild(dish);
  }

  return menuContent;
}

export default getMenu;
