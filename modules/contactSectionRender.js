export const contactInfoContainer = document.createElement('div');

const renderContactSection = () => {
  contactInfoContainer.className = 'contact-info-container';
  const contactHeader = document.createElement('h3');
  contactHeader.textContent = 'Contact Information';
  const contactText = document.createElement('p');
  contactText.textContent = 'Do you have any questions or you just want to say "hello"?';
  const contactChanels = document.createElement('ul');
  contactChanels.innerHTML = `
    <li> Our e-mail: test@gmail.com</li>
    <li> Our phone number: +90123456</li>
    <li> Our address: Streetname 22, SomeCity, Country</li>
    `;
  contactInfoContainer.append(contactHeader, contactText, contactChanels);
  document.body.insertBefore(contactInfoContainer, document.body.children[2]);
}
export default renderContactSection;