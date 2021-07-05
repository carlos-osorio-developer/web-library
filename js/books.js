const propBook = { submitButton: document.getElementById('button'), 
                   contentDiv: document.getElementById('content') };

const metBook = {
  init() {
    propBook.submitButton.addEventListener('click', metBook.updateStorage);
  },

  updateStorage() {
    localStorage.setItem('title', document.getElementById('title').value);
    localStorage.setItem('author', document.getElementById('author').value);
    metBook.addBook();
  },

  addBook() {
    const div = document.createElement('div');
    const title = document.createElement('p');
    title.textContent = localStorage.getItem('title');
    const author = document.createElement('p');
    author.textContent = localStorage.getItem('author');
    const separator = document.createElement('hr');
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(separator);
    propBook.contentDiv.prepend(div);
  },
};

metBook.init();
