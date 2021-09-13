const title = document.getElementById("title");
const author = document.getElementById("author");
const titleInput = document.getElementById("bookTitle");
const authorInput = document.getElementById("bookAuthor");
const addBook = document.getElementById("add");
const removeBook = document.getElementById("remove");

function Book (id,title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

let BookArray = [new Book(1,'mustafa','cathi')];

BookArray.push(new Book(2,'secound','secound'));

