const propBook = {
  submitButton: document.getElementById('button'),
  contentDiv: document.getElementById('content'),
  removeButtons: document.getElementsByClassName('remove'),
  bookDivs: document.getElementsByClassName('books'),
  title: localStorage.getItem('title'),
  author: localStorage.getItem('author')
};

const createBook = {
  init() {
    title = propBook.title ? propBook.title.split(',') : [];
    author = propBook.author ? propBook.author.split(',') : [];
    for(let i=0; i < title.length; i++) {      
      const div = document.createElement('div');
      div.className = 'books';
      const title = document.createElement('p');    
      title.textContent = localStorage.getItem('title');
      const author = document.createElement('p');
      author.textContent = localStorage.getItem('author');
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.className = 'remove';
      const separator = document.createElement('hr');
      div.appendChild(title);
      div.appendChild(author);
      div.appendChild(remove);
      div.appendChild(separator);
      propBook.contentDiv.prepend(div);
    }
    propBook.submitButton.addEventListener('click', createBook.updateStorage);
  },

  updateStorage() {
    // localStorage.clear();    
    title.push(document.getElementById('title').value);
    author.push(document.getElementById('author').value);
    localStorage.setItem('title', title);
    localStorage.setItem('author', author);
    createBook.addBook();
  },

  addBook() {
    deleteBook.init();
  },
};

const deleteBook = {
  init() {    
    for (var i = 0; i < propBook.removeButtons.length; i++) {
			propBook.removeButtons[i].addEventListener('click', deleteBook.removeDiv);
		}
  },

  removeDiv: function() {
    console.log('Arieeeeeeeeeeel');
    // propBook.contentDiv.removeChild(propBook.bookDivs[i]);
  }
};

createBook.init();
