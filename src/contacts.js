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
  const week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  for (let day of week) {
    const dayOfWeek = document.createElement('li');
    switch (day) {
      case 'Monday':
      case 'Tuesday':
      case 'Wednesday':
      case 'Thursday':
      case 'Friday':
        dayOfWeek.textContent = `${day}: 10:00 - 22:00`;
        hoursContent.appendChild(dayOfWeek);
        break;
      case 'Saturday':
        dayOfWeek.textContent = `${day}: 9:00 - 23:00`;
        hoursContent.appendChild(dayOfWeek);
        break;
      case 'Sunday':
        dayOfWeek.textContent = `${day}: 9:00 - 23:00`;
        hoursContent.appendChild(dayOfWeek);
        break;
      default:
        break;
    }
  }
  contactsContent.appendChild(locationHeader);
  contactsContent.appendChild(locationContent);
  contactsContent.appendChild(hoursHeader);
  contactsContent.appendChild(hoursContent);

  return contactsContent;
}

export default getContacts;
