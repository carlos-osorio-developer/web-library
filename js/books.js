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
    console.log('working');
    let div = document.createElement('div');
    let title = document.createElement('p');
    title.textContent = localStorage.getItem('title');
    div.appendChild(title);
    document.body.appendChild(div);
    console.log('here');
  }
}

metBook.init();