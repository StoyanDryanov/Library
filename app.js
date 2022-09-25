let Library = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const submitBtn = document.querySelector('[type=submit]');

submitBtn.addEventListener('click', addBookToLibrary);

function render() {
  let display = document.querySelector(".library");
  display.innerHTML = '';

  for (let i = 0; i < Library.length; i++) {
    createBook(Library[i]);
  }
}

function addBookToLibrary() {
    event.preventDefault();

    let title = document.getElementById('Title').value;
    let author = document.getElementById('Author').value;
    let pages = document.getElementById('Pages').value;
    let read = document.getElementById('is-read').checked;

    let newBook = new Book(title, author, pages, read);

    for (const prop in newBook) {
        if (newBook[prop] === '') {
            return;
        }
    } // if any of the field are empty then nothing will be added

    Library.push(newBook);

    render();

    form.reset();
}

function createBook(book) {

  let libraryContainer = document.querySelector(".library");
  let bookDiv = document.createElement("div");
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let isReadBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let buttonDiv = document.createElement('div');

  bookDiv.classList.add("book");

  if (book.read) {
    isReadBtn.classList.add("read");
  } else {
    isReadBtn.classList.add("not-read");
  }

  deleteBtn.classList.add("delete");
  buttonDiv.classList.add('buttons');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  isReadBtn.innerText = book.read ? "Read" : "Not Read";
  deleteBtn.innerText = "Delete";

  isReadBtn.addEventListener("click", () => {
    book.read = !book.read;
    render();
  });

  deleteBtn.addEventListener('click', () => {
    Library.splice(Library.indexOf(book), 1);
    render();
  })

  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(pages);

  buttonDiv.appendChild(isReadBtn);
  buttonDiv.appendChild(deleteBtn);
  
  bookDiv.appendChild(buttonDiv);

  libraryContainer.appendChild(bookDiv);
}

function isNotFull(book) {
    for (const prop in book) {
        if (book[prop] === '') {
            return;
        }
    }
}

Library.push(new Book('The Lord of the Rings', 'J. R. R. Tolkien', '1,191', true));
Library.push(new Book('IT', 'Stephen King', '1,138', false));
render();