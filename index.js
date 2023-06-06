import BookShelf from './modules/bookshelf.js';
import date from './modules/date.js';

date();

const book = new BookShelf();
book.init();
book.showListPage();
book.showFormPage();
book.showContactPage();