const myLibrary = [];

function Book(title, author, pageCount, year, genre, read) {
    this.id = crypto.randomUUID();
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

addBookToLibrary("The Hobbit","J.R.R Tolkien", 300, 1937,"Fantasy", false);
addBookToLibrary("Harry Potter and the Philosopher's stone"
    , "J.K. Rowling", 223,1997,"Fantasy", true)
addBookToLibrary("Pride and Prejudice", "Jane Austin", 448, 1813, "Romance", false)

displayLibrary();




