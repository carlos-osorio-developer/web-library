class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  title() {
    return this.title;
  }

  author() {
    return this.author;
  }
}

const propBook = {
  submitButton: document.getElementById('button'),
  contentDiv: document.getElementById('content'),
  removeButtons: document.getElementsByClassName('remove'),
  title: localStorage.getItem('title'),
  author: localStorage.getItem('author'),
};

const createBook = {
  init() {
    propBook.submitButton.addEventListener('click', createBook.newBook);
    createBook.updateDOM();
  },

  newBook() {
    const lastBook = new Book(document.getElementById('title').value, document.getElementById('author').value);
    createBook.addToStorage(lastBook.title, lastBook.author);
  },

  pushToString(string, item) {
    const arr = string ? string.split(',') : [];
    arr.push(item);
    return arr;
  },

  createNewDiv(t, a) {
    const div = document.createElement('div');
    div.className = 'books';
    const divTitle = document.createElement('p');
    divTitle.textContent = t;
    const divAuthor = document.createElement('p');
    divAuthor.textContent = a;
    const remove = document.createElement('button');
    remove.textContent = 'Remove';
    remove.className = 'remove';
    const separator = document.createElement('hr');
    div.appendChild(divTitle);
    div.appendChild(divAuthor);
    div.appendChild(remove);
    div.appendChild(separator);
    propBook.contentDiv.appendChild(div);
  },

  addToStorage(t, a) {
    const title = createBook.pushToString(propBook.title, t);
    const author = createBook.pushToString(propBook.author, a);
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
      this.createNewDiv(title[i], author[i]);
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
    title.splice(index, 1);
    author.splice(index, 1);
    localStorage.setItem('title', title);
    localStorage.setItem('author', author);
    propBook.title = localStorage.getItem('title');
    propBook.author = localStorage.getItem('author');
    createBook.updateDOM();
  },
};

createBook.init();
