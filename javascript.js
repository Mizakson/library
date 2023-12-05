/* 
project refresh
*/

const myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    // this.displayInfo = function() {
    //     return `${this.title}, ${this.author}, ${this.read}`;
    // };
}

const defBook1 = new Book('The War of the Worlds', 'H.G. Wells', 'no');
const defBook2 = new Book('Lord of the Flies', 'William Golding', 'yes');

myLibrary.push(defBook1);
myLibrary.push(defBook2);

Object.setPrototypeOf(defBook1, Book);
Object.setPrototypeOf(defBook2, Book);


function addBookToLibrary() {
    const newBook = new Book();
    Object.setPrototypeOf(newBook, Book);
};