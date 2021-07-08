const propBook = {
  submitButton: document.getElementById('button'),
  contentDiv: document.getElementById('content'),
  removeButtons: document.getElementsByClassName('remove'),
  title: localStorage.getItem('title'),
  author: localStorage.getItem('author'),
};

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

  static init() {
    propBook.submitButton.addEventListener('click', Book.newBook);
    Book.updateDOM();
  }

  static newBook() {
    const lastBook = new Book(document.getElementById('title').value, document.getElementById('author').value);
    Book.addToStorage(lastBook.title, lastBook.author);
  }

  static pushToString(string, item) {
    const arr = string ? string.split(',') : [];
    arr.push(item);
    return arr;
  }

  static createNewDiv(t, a) {
    const div = document.createElement('div');
    div.className = 'books flex justify-between py-1 bg-gray-400';
    const divTitle = document.createElement('p');
    divTitle.textContent = t;
    divTitle.className = 'w-1/5';
    const divAuthor = document.createElement('p');
    divAuthor.textContent = `by ${a}`;
    divAuthor.className = 'w-1/5';
    const remove = document.createElement('button');
    remove.textContent = 'Remove';
    remove.className = 'remove w-1/5 btn bg-red-600';
    const separator = document.createElement('hr');
    div.appendChild(divTitle);
    div.appendChild(divAuthor);
    div.appendChild(remove);
    div.appendChild(separator);
    propBook.contentDiv.appendChild(div);
  }

  static addToStorage(t, a) {
    const title = Book.pushToString(propBook.title, t);
    const author = Book.pushToString(propBook.author, a);
    localStorage.setItem('title', title);
    localStorage.setItem('author', author);
    propBook.title = localStorage.getItem('title');
    propBook.author = localStorage.getItem('author');
    Book.updateDOM();
  }

  static updateDOM() {
    propBook.contentDiv.textContent = '';
    const title = propBook.title ? propBook.title.split(',') : [];
    const author = propBook.author ? propBook.author.split(',') : [];
    for (let i = 0; i < title.length; i += 1) {
      this.createNewDiv(title[i], author[i]);
    }
    Book.buttonsEvents();
  }

  static buttonsEvents() {
    for (let i = 0; i < propBook.removeButtons.length; i += 1) {
      propBook.removeButtons[i].addEventListener('click', () => { Book.removeStorage(i); });
    }
  }

  static removeStorage(index) {
    const title = propBook.title ? propBook.title.split(',') : [];
    const author = propBook.author ? propBook.author.split(',') : [];
    title.splice(index, 1);
    author.splice(index, 1);
    localStorage.setItem('title', title);
    localStorage.setItem('author', author);
    propBook.title = localStorage.getItem('title');
    propBook.author = localStorage.getItem('author');
    Book.updateDOM();
  }
}

Book.init();
