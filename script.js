const myLibrary = [];

function Book(title, author, pageCount, year, genre, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.year = year;
    this.genre = genre;
    this.read = read;
}

function addBookToLibrary(title, author, pageCount, year, genre, read) {
    const newBook = new Book(title, author, pageCount, year, genre, read);
    myLibrary.push(newBook);
}

function displayLibrary() {
    myLibrary.forEach(element => {
        console.table(element);
    });
}

addBookToLibrary("The Hobbit","J.R.R Tolkien", 300, 1937,"Fantasy", "not read");
addBookToLibrary("Harry Potter and the Philosopher's stone"
    , "J.K. Rowling", 223,1997,"Fantasy", "read")
addBookToLibrary("Pride and Prejudice", "Jane Austin", 448, 1813, "Romance", "read")

displayLibrary();


window.onload = function () {
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("dialog + button");
  const closeButton = document.querySelector("dialog button");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}

