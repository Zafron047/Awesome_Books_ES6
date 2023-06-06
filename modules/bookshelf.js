class BookShelf {
  constructor() {
    this.section = document.getElementById('book-section');
    this.form = document.querySelector('form');
    this.titleInput = document.getElementById('title-input');
    this.authorInput = document.getElementById('author-input');
    this.DATA = JSON.parse(localStorage.getItem('data')) || [];
    this.counter = 0;

    this.list = document.querySelector('#list');
    this.booksWrapper = document.querySelector('#books-wrapper');

    this.addNew = document.querySelector('#addNew');
    this.form = document.querySelector('#form');

    this.contact = document.querySelector('#contact');
    this.contactPage = document.querySelector('#contact-page');

    if (this.DATA.length > 0) {
      this.show();
    }
  }

  add(author, title) {
    this.DATA = this.DATA.concat({ author, title });
    localStorage.setItem('data', JSON.stringify(this.DATA));
  }

  remove(author, title) {
    this.DATA = this.DATA.filter(
      (b) => b.author !== author || b.title !== title,
    );
    localStorage.setItem('data', JSON.stringify(this.DATA));
    this.counter -= 1;
  }

  show() {
    this.section.innerHTML = '';
    this.DATA.forEach((data) => {
      this.counter += 1;
      const div = document.createElement('div');
      div.classList.add('book-item');
      const authorName = document.createElement('p');
      authorName.textContent = ` "${data.title}" by ${data.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      div.appendChild(authorName);
      div.appendChild(removeBtn);
      if (this.counter % 2 === 0) {
        div.style.background = 'lightgray';
      }

      this.section.appendChild(div);

      removeBtn.addEventListener('click', () => {
        this.remove(data.author, data.title);
        this.show();
      });
    });
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.add(this.authorInput.value, this.titleInput.value);
      this.form.reset();
      this.show();
    });
  }

  showListPage() {
    this.list.addEventListener('click', () => {
      this.booksWrapper.style.display = 'block';
      this.form.style.display = 'none';
      this.contactPage.style.display = 'none';
    });
  }

  showFormPage() {
    this.addNew.addEventListener('click', () => {
      this.form.style.display = 'flex';
      this.booksWrapper.style.display = 'none';
      this.contactPage.style.display = 'none';
    });
  }

  showContactPage() {
    this.contact.addEventListener('click', () => {
      this.contactPage.style.display = 'flex';
      this.form.style.display = 'none';
      this.booksWrapper.style.display = 'none';
    });
  }
}



export default BookShelf;
