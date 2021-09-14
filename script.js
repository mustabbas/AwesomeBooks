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
    const titleLi = document.createTextNode(BookArray[i].title);
    const authorLi = document.createTextNode(BookArray[i].author);
    remove.textContent = 'remove';
    remove.value = i;
    remove.id = i;
    title.id = `title${i}`;
    author.id = `author${i}`;
    const removeButton = document.getElementById(i);
    if (removeButton == null) {
      title.appendChild(titleLi);
      author.appendChild(authorLi);
      list.appendChild(title);
      list.appendChild(author);
      list.appendChild(remove);
    }
  }
}

function removeBookList() {
  for (let i = 0; i < BookArray.length; i += 1) {
    if (document.getElementById(BookArray[i].id) != null) {
      // eslint-disable-next-line no-loop-func
      document.getElementById(BookArray[i].id).addEventListener('click', () => {
        function isId(value) {
          return value.id !== BookArray[i].id;
        }
        document.getElementById(`title${i}`).remove();
        document.getElementById(`author${i}`).remove();
        document.getElementById(i).remove();
        BookArray = BookArray.filter(isId);
      });
    }
  }
}

let id = 0;
addBook.addEventListener('click', () => {
  AddBook(id, titleInput.value, authorInput.value);
  localStorage.setItem('BookArray', JSON.stringify(BookArray));
  DispalyTheBook();
  removeBookList();
  id += 1;
});
