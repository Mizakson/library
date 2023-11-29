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

const form = document.getElementById('form');
const bookshelf = document.querySelector('.bookshelf');
const $title = document.getElementById('title');
const $author = document.getElementById('author');
const $read = document.getElementById('read');
const table = document.getElementById('books');


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

function populateDisplay() {
    for (var book of myLibrary) {
        const row = document.createElement('tr');
        for (var value in book) {
            const cell = document.createElement('td');
            cell.innerHTML = `${book[value]}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

window.onload(populateDisplay());


// updateDisplay function here