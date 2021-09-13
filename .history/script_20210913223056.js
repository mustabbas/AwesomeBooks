
function Book (title, author) {
    this.title = title;
    this.author = author;
  }

let BookArray = [new Book('mustafa','cathi')];

BookArray.push(new Book('secound','secound'));

console.log(BookArray);