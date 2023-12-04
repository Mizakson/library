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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    updateDisplay();
    clearForm();
});


function addBookToLibrary() {
        newBook.title = $title.value;
        newBook.author = $author.value;
        newBook.read = $read.value;
        myLibrary.push(newBook);
        console.log(myLibrary);
};

// shows default data
function populateDisplay() {
    for (var book of myLibrary) {
        const row = document.createElement('tr');
        row.id = 'book-data';
        for (var value in book) {
            const cell = document.createElement('td');
            cell.innerHTML = `${book[value]}`;
            row.appendChild(cell);
        }
        for (let i = 0; i < 1; i++) {
            const btn = document.createElement('button');
            btn.innerText = 'X';
            btn.id = 'delete-btn';
            row.appendChild(btn);
        }
        for (let i = 0; i < 1; i++) {
            const btn = document.createElement('button');
            btn.innerText = 'Read Status';
            btn.id = 'read-status-btn';
            row.appendChild(btn);
        }

        table.appendChild(row);

    }
};

populateDisplay();

function updateDisplay() {
    newVal = newBook;
    const row = document.createElement('tr');
    row.id = 'book-data';
    for (item in newBook) {
        const cell = document.createElement('td');
        newBook.title = $title.value;
        newBook.author = $author.value;
        newBook.read = $read.value;
        cell.innerHTML = `${newVal[item]}`;
        row.appendChild(cell);
    }
    for (let i = 0; i < 1; i++) {
        const btn = document.createElement('button');
        btn.innerText = 'X';
        btn.id = 'delete-btn';
        row.appendChild(btn);
    }
    for (let i = 0; i < 1; i++) {
        const btn = document.createElement('button');
        btn.innerText = 'Read Status';
        btn.id = 'read-status-btn';
        row.appendChild(btn);
    }
    table.appendChild(row);
};


function clearForm() {
    $title.value = '';
    $author.value = '';
};

function deleteBook(element) {
    const arr = myLibrary;
    arr.splice(element, 1);
    // return myLibrary;
    console.log(myLibrary);
}
