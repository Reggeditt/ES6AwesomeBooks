import { bookEntryRemove, bookCollectionContainer } from './renderCollection.js';

export default function removeBook(data) {
  for (let i = 0; i < bookEntryRemove.length; i += 1) {
    /* eslint-disable no-loop-func */
    bookEntryRemove[i].addEventListener('click', (event) => {
      const datasetId = event.target.dataset.id;
      data.removeBook(datasetId);
      bookCollectionContainer.innerHTML = '';
      for (let i = 0; i < data.collection.length; i += 1) {
        const bookEntryTitle = document.createElement('h3');
        bookEntryTitle.textContent = `"${data.collection[i].bookAuthor}" by ${data.collection[i].bookTitle}`;
        bookEntryRemove.push(document.createElement('button'));
        bookEntryRemove.className = 'remove-btn';
        bookEntryRemove[i].textContent = 'Remove';
        bookEntryRemove[i].className = 'remove-btn';
        bookEntryRemove[i].dataset.id = data.collection[i].bookID;
        const bookEntryContainer = document.createElement('div');
        if (i % 2 === 0) {
          bookEntryContainer.className = 'book-entry entry-bg-1';
        } else {
          bookEntryContainer.className = 'book-entry entry-bg-2';
        }
        bookCollectionContainer.appendChild(bookEntryContainer);
        bookEntryContainer.append(bookEntryTitle, bookEntryRemove[i]);
      }
    });
  }
}