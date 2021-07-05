const propBook = { title: null, author: null, submitButton: document.getElementById('button')
}

var metBook = {
  init : function(){
    propBook.submitButton.addEventListener('click', metBook.updateStorage);
  },

  updateStorage : function(){
    localStorage.setItem('title', document.getElementById('title').value);
    localStorage.setItem('author', document.getElementById('author').value);
  }
}

metBook.init();