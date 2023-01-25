import { DateTime } from './luxon.js';

export const navbar = document.createElement('nav');
export const booksList = document.createElement('span');
export const newBookForm = document.createElement('span');
export const contactInfo = document.createElement('span');
const renderNavbar = () => {
  navbar.className = 'navbar';
  const logo = document.createElement('div');
  logo.className = 'logo-container';
  const logoContent = document.createElement('span');
  logoContent.className = 'logo-content';
  logoContent.textContent = 'Awesome Books';
  const navlinks = document.createElement('span');
  navlinks.className = 'nav-links';
  booksList.className = 'books-list nav-link';
  booksList.textContent = 'List';
  newBookForm.className = 'new-book-form nav-link';
  newBookForm.textContent = 'Add new';
  contactInfo.className = 'contact-us nav-link';
  contactInfo.textContent = 'Contact';
  logo.appendChild(logoContent);
  navbar.append(logo, navlinks);
  navlinks.append(booksList, newBookForm, contactInfo);
  const time = document.createElement('p');
  time.className = 'time';
  const updateClock = () => {
    const now = DateTime.local();
    time.innerHTML = now.toJSDate().toString().substring(3, 21);
  };
  setInterval(updateClock, 1000);
  document.body.insertBefore(navbar, document.body.children[0]);
  document.body.insertBefore(time, document.body.children[1]);
};
export default renderNavbar;