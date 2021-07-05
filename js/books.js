const propBook = {
  submitButton: document.getElementById('button'),
  contentDiv: document.getElementById('content'),
  removeButtons: document.getElementsByClassName('remove'),
};

const createBook = {
  init() {
    propBook.submitButton.addEventListener('click', createBook.updateStorage);
  },

  updateStorage() {
    localStorage.setItem('title', document.getElementById('title').value);
    localStorage.setItem('author', document.getElementById('author').value);
    createBook.addBook();
  },

  addBook() {
    const div = document.createElement('div');
    div.className = 'books';
    const title = document.createElement('p');
    const remove = document.createElement('button');
    remove.textContent = 'remove';
    remove.className = 'remove';
    title.textContent = localStorage.getItem('title');
    const author = document.createElement('p');
    author.textContent = localStorage.getItem('author');
    const separator = document.createElement('hr');
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(remove);
    div.appendChild(separator);

    propBook.contentDiv.prepend(div);
  },
};

const deleteBook = {
  init() {
    // propBook.submitButton.addEventListener('click', createBook.updateStorage);
  },
};

createBook.init();
deleteBook.init();
