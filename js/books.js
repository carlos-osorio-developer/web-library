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
    propBook.submitButton.addEventListener('click', createBook.updateStorage);
    createBook.updateDOM();
  },

  updateStorage() {
    // localStorage.clear();    
    title = propBook.title ? propBook.title.split(',') : [];
    author = propBook.author ? propBook.author.split(',') : [];
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
    title = propBook.title ? propBook.title.split(',') : [];
    author = propBook.author ? propBook.author.split(',') : [];
    for(let i=0; i < title.length; i++) {      
      const div = document.createElement('div');
      div.className = 'books';
      const div_title = document.createElement('p');    
      div_title.textContent = title[i];
      const div_author = document.createElement('p');
      div_author.textContent = author[i];
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.className = 'remove';
      const separator = document.createElement('hr');
      div.appendChild(div_title);
      div.appendChild(div_author);
      div.appendChild(remove);
      div.appendChild(separator);
      propBook.contentDiv.prepend(div);
    }
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
