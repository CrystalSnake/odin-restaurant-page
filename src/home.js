import Promo from './images/nature-white-restaurant-dish-meal-food-760717-pxhere.com.jpg';

function getHome() {
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

  return mainContent;
}

export default getHome;
