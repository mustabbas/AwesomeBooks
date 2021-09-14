// const titleInput = document.getElementById('bookTitle');
// const authorInput = document.getElementById('bookAuthor');
// const addBook = document.getElementById('add');
// const list = document.getElementById('list');

const BookArray = [];

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.saveTolocal = this.saveTolocal.bind(this);
  }

  add() {
    BookArray.push(new Book(this.id, this.title, this.author));
  }

  saveTolocal() {
    localStorage.setItem('BookArray', JSON.stringify(BookArray));
  }
}

const myBook = new Book(1, 'Ford', 2014);

console.log(myBook.add());
console.log(BookArray);