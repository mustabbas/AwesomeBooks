// const titleInput = document.getElementById('bookTitle');
// const authorInput = document.getElementById('bookAuthor');
// const addBook = document.getElementById('add');
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
}

const myBook = new Book();

console.log(myBook.add(1, 'Ford', 2014));
console.log(myBook.saveTolocal());
console.log(this.BookArray);
