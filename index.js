import renderNavbar, { booksList, newBookForm, contactInfo } from './modules/navBar.js';
import displayPageSection from './modules/displayPages.js';
import { formEl, titleEl, nameEl } from './modules/DOM.js';
import BookCollection from './modules/bookCollection.js';
import renderBooks, { bookCollectionSection } from './modules/renderCollection.js';
import removeBook from './modules/removeBook.js';
import renderContactSection, { contactInfoContainer } from './modules/contactSectionRender.js';
import renderFooter from './modules/footer.js';

const bookCollection = new BookCollection();
console.log(bookCollection)
window.addEventListener('load', () => {
  renderNavbar();
  renderBooks(bookCollection);
  removeBook(bookCollection);
  renderContactSection();
  renderFooter();
});

formEl.addEventListener('submit', () => {
  console.log('event listener is working')
  const bookTitle = titleEl.value;
  const bookAuthor = nameEl.value || 'unknown';
  bookCollection.addBook(bookAuthor, bookTitle);
});

booksList.addEventListener('click', () => {
  displayPageSection(bookCollectionSection, formEl, contactInfoContainer);
});

newBookForm.addEventListener('click', () => {
  displayPageSection(formEl, bookCollectionSection, contactInfoContainer);
});

contactInfo.addEventListener('click', () => {
  displayPageSection(contactInfoContainer, bookCollectionSection, formEl);
});