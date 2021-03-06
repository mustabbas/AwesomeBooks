const titleInput = document.getElementById('bookTitle');
const authorInput = document.getElementById('bookAuthor');
const addBook = document.getElementById('add');
const list = document.getElementById('list');
const navlist = document.getElementById('navlist');
const navform = document.getElementById('navform');
const navcontact = document.getElementById('navcontact');
const bklist = document.getElementById('bklist');
const bkform = document.getElementById('bkform');
const contact = document.getElementById('contact');

let BookArray = [];
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  add() {
    BookArray.push(this);
    this.constructor.DisplayList();
  }

  static remove(id) {
    BookArray.splice(id - 1, 1);
    document.getElementById(`row${id}`).remove();
    Book.prototype.saveTolocal();
  }

  static showDate() {
    // eslint-disable-next-line no-undef
    const { DateTime } = luxon;
    const myDate = document.querySelector('#date');
    const showMyDate = document.createElement('div');
    showMyDate.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    myDate.appendChild(showMyDate);
  }

  // eslint-disable-next-line class-methods-use-this
  saveTolocal() {
    localStorage.setItem('BookArray', JSON.stringify(BookArray));
  }

  DispalyTheBook() {
    if (BookArray.length !== 0) {
      const row = document.createElement('tr');
      const title = document.createElement('td');
      const removeTD = document.createElement('td');
      const remove = document.createElement('Button');
      const titleLi = document.createTextNode(`"${this.title}${'"'.concat(`by ${this.author}`)}`);
      remove.textContent = 'Remove';
      remove.value = this.id;
      remove.id = this.id;
      remove.className = 'removeButton';
      remove.setAttribute('onclick', `Book.remove(${this.id})`);
      row.id = `row${this.id}`;
      const removeButton = document.getElementById(this.id);
      if (removeButton == null) {
        removeTD.appendChild(remove);
        title.appendChild(titleLi);
        row.appendChild(title);
        row.appendChild(removeTD);
        list.appendChild(row);
      }
    }
  }

  static DisplayList() {
    bklist.classList.remove('display-none');
    bkform.classList.add('display-none');
    contact.classList.add('display-none');
  }

  static DisplayForm() {
    bklist.classList.add('display-none');
    bkform.classList.remove('display-none');
    contact.classList.add('display-none');
  }

  static DisplayContact() {
    bklist.classList.add('display-none');
    bkform.classList.add('display-none');
    contact.classList.remove('display-none');
  }
}

const localBook = JSON.parse(localStorage.getItem('BookArray'));
let id;
if (localBook !== null) {
  id = localBook.length;
} else {
  id = 0;
}

navlist.addEventListener('click', Book.DisplayList);
navform.addEventListener('click', Book.DisplayForm);
navcontact.addEventListener('click', Book.DisplayContact);

addBook.addEventListener('click', () => {
  const myBook = new Book(id, titleInput.value, authorInput.value);
  if (titleInput.value !== '' || authorInput.value !== '') {
    myBook.add();
    myBook.saveTolocal();
    myBook.DispalyTheBook();
    id += 1;
  }
});

window.addEventListener('load', () => {
  const localBook = JSON.parse(localStorage.getItem('BookArray'));
  if (localBook !== null) {
    BookArray = localBook;
    for (let index = 0; index < BookArray.length; index += 1) {
      const myBook = new Book(BookArray[index].id, BookArray[index].title, BookArray[index].author);
      myBook.DispalyTheBook();
    }
  }
});

// Show date
document.addEventListener('DOMContentLoaded', Book.showDate);
