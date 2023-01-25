export const bookCollectionContainer = document.createElement('div');
bookCollectionContainer.className = 'bookCollectionContainer';
export const bookCollectionSection = document.createElement('div');
bookCollectionSection.className = 'book-collection-section';
export const collectionHeader = document.createElement('h2');
collectionHeader.className = 'collection-header';
collectionHeader.textContent = 'All awesome books';
bookCollectionSection.append(collectionHeader, bookCollectionContainer);
export const bookEntryRemove = [];
 
const renderBooks = (data) => {
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
  document.body.insertBefore(bookCollectionSection, document.body.children[2]);
}
export default renderBooks;