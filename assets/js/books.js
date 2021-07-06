class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const propBook = {
  submitButton: document.getElementById('button'),
  contentDiv: document.getElementById('content'),
  removeButtons: document.getElementsByClassName('remove'),
  bookDivs: document.getElementsByClassName('books'),
  title: localStorage.getItem('title'),
  author: localStorage.getItem('author'),
};

const createBook = {
  init() {
    propBook.submitButton.addEventListener('click', createBook.updateStorage);
    createBook.updateDOM();
  },

  updateStorage() {
    const title = propBook.title ? propBook.title.split(',') : [];
    const author = propBook.author ? propBook.author.split(',') : [];
    title.push(document.getElementById('title').value);
    author.push(document.getElementById('author').value);
    localStorage.setItem('title', title);
    localStorage.setItem('author', author);
    propBook.title = localStorage.getItem('title');
    propBook.author = localStorage.getItem('author');
    createBook.updateDOM();
  },

  updateDOM() {
    propBook.contentDiv.textContent = '';
    const title = propBook.title ? propBook.title.split(',') : [];
    const author = propBook.author ? propBook.author.split(',') : [];
    for (let i = 0; i < title.length; i += 1) {
      const div = document.createElement('div');
      div.className = 'books';
      const divTitle = document.createElement('p');
      divTitle.textContent = title[i];
      const divAuthor = document.createElement('p');
      divAuthor.textContent = author[i];
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.className = 'remove';
      const separator = document.createElement('hr');
      div.appendChild(divTitle);
      div.appendChild(divAuthor);
      div.appendChild(remove);
      div.appendChild(separator);
      propBook.contentDiv.prepend(div);
    }
    createBook.buttonsEvents();
  },

  buttonsEvents() {
    for (let i = 0; i < propBook.removeButtons.length; i += 1) {
      propBook.removeButtons[i].addEventListener('click', () => { createBook.removeStorage(i); });
    }
  },

  removeStorage(index) {
    const title = propBook.title ? propBook.title.split(',') : [];
    const author = propBook.author ? propBook.author.split(',') : [];
    title.splice(title.length - 1 - index, 1);
    author.splice(author.length - 1 - index, 1);
    localStorage.setItem('title', title);
    localStorage.setItem('author', author);
    propBook.title = localStorage.getItem('title');
    propBook.author = localStorage.getItem('author');
    createBook.updateDOM();
  },
};

createBook.init();
