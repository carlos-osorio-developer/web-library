const propBook = { title: null, author: null, submitButton: document.getElementById('button')
}

var metBook = {
  init : function(){
    propBook.submitButton.addEventListener('click', metBook.updateStorage);
  },

  updateStorage : function(){
    localStorage.setItem('title', document.getElementById('title').value);
    localStorage.setItem('author', document.getElementById('author').value);
    metBook.addBook();
  },

  addBook : function(){
    let div = document.createElement('div');
    let title = document.createElement('p');
    title.textContent = localStorage.getItem('title');
    let author = document.createElement('p');
    author.textContent = localStorage.getItem('author');
    let separator = document.createElement('hr');
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(separator);
    document.body.appendChild(div);
    console.log('here');
  }
}

metBook.init();