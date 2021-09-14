const titleInput = document.getElementById('bookTitle');
const authorInput = document.getElementById('bookAuthor');
const addBook = document.getElementById('add');
// const list = document.getElementById('list');

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.BookArray = [];
  }

  add(id, title, author) {
    this.BookArray.push(new Book(id, title, author));
    return this.BookArray;
  }

  saveTolocal() {
    localStorage.setItem('BookArray', JSON.stringify(this.BookArray));
  }

  //   DispalyTheBook(id,title,author) {
  //     const title = document.createElement('li');
  //     const author = document.createElement('li');
  //     const remove = document.createElement('Button');
  //     const line = document.createElement('hr');
  //     const titleLi = document.createTextNode(title);
  //     const authorLi = document.createTextNode(author);
  //     remove.textContent = 'remove';
  //     remove.value = id;
  //     remove.id = id;
  //     remove.className = 'removeButton';
  //     title.id = `title${id}`;
  //     author.id = `author${id}`;
  //     const removeButton = document.getElementById(id);
  //     if (removeButton == null) {
  //       title.appendChild(titleLi);
  //       author.appendChild(authorLi);
  //       list.appendChild(title);
  //       list.appendChild(author);
  //       list.appendChild(remove);
  //       list.appendChild(line);
  //     }
  //   }
}

addBook.addEventListener('click', () => {
  const myBook = new Book(1, 2, 3);
  myBook.add();
  myBook.saveTolocal();
});
