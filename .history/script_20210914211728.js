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

  add() {
    this.BookArray.push(new Book(this.id, this.title, this.author));
  }

  saveTolocal() {
    localStorage.setItem('BookArray', JSON.stringify(this.BookArray));
  }
}

const myBook = new Book(1, 'Ford', 2014);

console.log(myBook.add());
console.log(myBook.saveTolocal());
console.log(BookArray);
