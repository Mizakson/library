/* 
project refresh
*/

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const defBook1 = new Book('The War of the Worlds', 'H.G. Wells', 231, 'no');
const defBook2 = new Book('Lord of the Flies', 'William Golding', 315, 'yes');

myLibrary.push(defBook1);
myLibrary.push(defBook2);

Object.setPrototypeOf(defBook1, Book);
Object.setPrototypeOf(defBook2, Book);

console.log(myLibrary);

function addBookToLibrary() {
    const newBook = new Book();
    Object.setPrototypeOf(newBook, Book);
};

const newEntryBtn = document.getElementById('add-book');
const form = document.getElementById('add-book-form');

newEntryBtn.addEventListener('onclick', () => {
    console.log('clicked');
})