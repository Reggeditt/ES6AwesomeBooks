export default class BookCollection {
  constructor() {
    this.collection = JSON.parse(window.localStorage.getItem('bookCollection')) || [];
  }

  addBook(bookTitle, bookAuthor) {
    const bookID = Math.ceil(Math.random() * 10000);
    this.collection.push({ bookTitle, bookAuthor, bookID });
    this.updateLocalStorage();
  }

  removeBook(bookID) {
    this.collection = this.collection.filter((book) => book.bookID !== +bookID);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    window.localStorage.setItem('bookCollection', JSON.stringify(this.collection));
  }
}