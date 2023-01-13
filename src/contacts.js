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

  const contactUsHeader = document.createElement('h2');
  contactUsHeader.textContent = 'Contact Us';

  const tel = document.createElement('div');
  const telLabel = document.createElement('span');
  telLabel.textContent = 'Tel: ';
  const telNumber = document.createElement('a');
  telNumber.href = 'tel:+1234567890';
  telNumber.textContent = '+1234567890';
  tel.appendChild(telLabel);
  tel.appendChild(telNumber);

  const email = document.createElement('div');
  const emailLabel = document.createElement('span');
  emailLabel.textContent = 'E-mail: ';
  const emailAddress = document.createElement('a');
  emailAddress.href = 'mailto:hikari@gmail.com';
  emailAddress.textContent = 'hikari@gmail.com';
  email.appendChild(emailLabel);
  email.appendChild(emailAddress);

  contactsContent.appendChild(locationHeader);
  contactsContent.appendChild(locationContent);
  contactsContent.appendChild(hoursHeader);
  contactsContent.appendChild(hoursContent);
  contactsContent.appendChild(contactUsHeader);
  contactsContent.appendChild(tel);
  contactsContent.appendChild(email);

  return contactsContent;
}

export default getContacts;
