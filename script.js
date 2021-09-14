const titleInput = document.getElementById('bookTitle');
const authorInput = document.getElementById('bookAuthor');
const addBook = document.getElementById('add');
const list = document.getElementById('list');

function Book(id, title, author) {
  this.id = id;
  this.title = title;
  this.author = author;
}

let BookArray = [];

function AddBook(id, title, author) {
  BookArray.push(new Book(id, title, author));
}

function DispalyTheBook() {
  for (let i = 0; i < BookArray.length; i += 1) {
    const title = document.createElement('li');
    const author = document.createElement('li');
    const remove = document.createElement('Button');
    const line = document.createElement('hr');
    const titleLi = document.createTextNode(BookArray[i].title);
    const authorLi = document.createTextNode(BookArray[i].author);
    remove.textContent = 'remove';
    remove.value = i;
    remove.id = i;
    remove.className = 'removeButton';
    title.id = `title${i}`;
    author.id = `author${i}`;
    const removeButton = document.getElementById(i);
    if (removeButton == null) {
      title.appendChild(titleLi);
      author.appendChild(authorLi);
      list.appendChild(title);
      list.appendChild(author);
      list.appendChild(remove);
      list.appendChild(line);
    }
  }
}

function removeBookList(e) {
  function isId(value) {
    return value.id !== e.target.id;
  }
  if (document.getElementById(`title${e.target.id}`) != null) {
    document.getElementById(`title${e.target.id}`).remove();
  }
  if (document.getElementById(`author${e.target.id}`) != null) {
    document.getElementById(`author${e.target.id}`).remove();
  }
  if (document.getElementById(e.target.id) != null) {
    document.getElementById(e.target.id).remove();
  }
  BookArray = BookArray.filter(isId);
}

function addEvents() {
  const buttonArray = document.getElementsByClassName('removeButton');
  for (let i = 0; i < buttonArray.length; i += 1) {
    if (document.addEventListener) {
      buttonArray[i].addEventListener('click', removeBookList);
    }
  }
}

let id = 0;
addBook.addEventListener('click', () => {
  AddBook(id, titleInput.value, authorInput.value);
  localStorage.setItem('BookArray', JSON.stringify(BookArray));
  DispalyTheBook();
  addEvents();
  id += 1;
});
