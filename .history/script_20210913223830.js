
function Book (id,title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

let BookArray = [new Book(1,'mustafa','cathi')];

BookArray.push(new Book(2,'secound','secound'));


BookArray.filter(checkId);

function checkId(id) {
    return id == 2;
  }


console.log(BookArray);