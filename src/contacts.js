import week from './hours.json';

function getContacts() {
  const contactsContent = document.createElement('div');
  contactsContent.classList.add('main-content', 'contacts-content');
  const locationHeader = document.createElement('h2');
  locationHeader.textContent = 'Location:';
  const locationContent = document.createElement('p');
  locationContent.textContent = '2050 Ballenger Ave, Alexandria, VA 22314, USA';
  const hoursHeader = document.createElement('h2');
  hoursHeader.textContent = 'Hours:';
  const hoursContent = document.createElement('ul');

  for (let day of week) {
    const dayOfWeek = document.createElement('li');
    dayOfWeek.textContent = `${day.day}: ${day.hours}`;
    hoursContent.appendChild(dayOfWeek);
  }

  contactsContent.appendChild(locationHeader);
  contactsContent.appendChild(locationContent);
  contactsContent.appendChild(hoursHeader);
  contactsContent.appendChild(hoursContent);

  return contactsContent;
}

export default getContacts;
