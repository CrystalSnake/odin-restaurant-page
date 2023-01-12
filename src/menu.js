import Yakisoba from './images/asian-dish-meal-food-meat-cuisine-774746-pxhere.com.jpg';
import Rolls from './images/bowl-dish-food-green-produce-vegetable-1331506-pxhere.com.jpg';
import Ramen from './images/dish-meal-food-breakfast-cuisine-soup-729807-pxhere.com.jpg';
import ShrimpFriedRice from './images/sea-white-restaurant-isolated-asian-dish-819397-pxhere.com.jpg';

const dishes = [
  {
    name: 'Yakisoba',
    content: 'Yakisoba noodles, shiitake mushrooms, tofu cheese',
    image: Yakisoba,
  },
  {
    name: 'Rolls',
    content: 'Rice, sesame seeds, carrot, onion, nori sheets',
    image: Rolls,
  },

  {
    name: 'Ramen',
    content: 'Chicken, noodle, egg,',
    image: Ramen,
  },

  {
    name: 'Shrimp Fried Rice',
    content: 'Rice, shrimps, green onion, soy sauce',
    image: ShrimpFriedRice,
  },
];

function getDishCard(name, content, image) {
  const dishCard = document.createElement('div');
  dishCard.classList.add('dish-card');
  const dishName = document.createElement('h2');
  dishName.classList.add('dish-name');
  dishName.textContent = name;
  const dishImage = document.createElement('img');
  dishImage.classList.add('dish-image');
  dishImage.src = image;
  const dishContent = document.createElement('p');
  dishContent.classList.add('dish-content');
  dishContent.textContent = content;
  dishCard.appendChild(dishName);
  dishCard.appendChild(dishImage);
  dishCard.appendChild(dishContent);

  return dishCard;
}

function getMenu() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('main-content');
  for (let dishItem of dishes) {
    const dish = getDishCard(dishItem.name, dishItem.content, dishItem.image);
    menuContent.appendChild(dish);
  }

  return menuContent;
}

export default getMenu;
