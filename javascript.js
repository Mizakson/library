const myLibrary = [];


function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return `${title} by ${author}, ${pages}, ${read}`;
    // };
};

const defaultBook = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 295,
    read: true
}; 


function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(defaultBook);