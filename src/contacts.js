function getContacts() {
  const contactsContent = document.createElement('div');
  contactsContent.classList.add('main-content');
  const contacts = document.createElement('p');
  contacts.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit consequat euismod. Nunc quis porta nisi. Nulla ac lorem eu nisl feugiat finibus. Maecenas pellentesque dolor vitae magna dictum sollicitudin. Sed pharetra vestibulum egestas. Duis facilisis felis non accumsan condimentum.';

  const aboutOpen = document.createElement('p');
  aboutOpen.textContent = 'Working for you since 2010.';
  contactsContent.appendChild(contacts);

  return contactsContent;
}

export default getContacts;
