/* 
project refresh
*/

const myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.displayInfo = function() {
        return `${this.title}, ${this.author}, ${this.read}`;
    };
}

const defBook1 = new Book('The War of the Worlds', 'H.G. Wells', 'no');
const defBook2 = new Book('Lord of the Flies', 'William Golding', 'yes');

myLibrary.push(defBook1);
myLibrary.push(defBook2);

Object.setPrototypeOf(defBook1, Book);
Object.setPrototypeOf(defBook2, Book);

const form = document.getElementById('form');
const bookshelf = document.querySelector('.bookshelf');
const $title = document.getElementById('title');
const $author = document.getElementById('author');
const $read = document.getElementById('read');
const table = document.getElementById('books');

/* 
1. addBookToLibrary func
take user input and store it into a new Book obj
inside of myLibrary array

2. loop through the array to populate table display
nested loop
lv 1 - to get the number of books in the array
lv 2 - to get the number of properties in the obj (3)
lv 3 - to get the value of each property in the obj

*/

const newBook = new Book();
Object.setPrototypeOf(newBook, Book);

function addBookToLibrary() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        newBook.title = $title.value;
        newBook.author = $author.value;
        newBook.read = $read.value;
        myLibrary.push(newBook.displayInfo());
        console.log(myLibrary);
    })
};

addBookToLibrary();