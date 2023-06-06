import BookShelf from './modules/bookshelf.js';

const book = new BookShelf();
book.init();
book.showListPage();
book.showFormPage();
book.showContactPage();