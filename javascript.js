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


const newBook = new Book();
Object.setPrototypeOf(newBook, Book);

function generateTable() {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // column headers
    const row = document.createElement('tr');
    row.id = 'col-title'
        
    for (let i = 0; i < 3; i++) {
        const newHeader = document.createElement('th');
        newHeader.innerText = 'col names here';
        row.appendChild(newHeader);
    }
    table.appendChild(row);

        for (var book of myLibrary) {
            const bodyRow = document.createElement('tr');
            bodyRow.id = 'book-entry';
            for (val in book) {
                const cell = document.createElement('td');
                cell.innerHTML = `${book[val]}`;
                bodyRow.appendChild(cell);
            }
            // button creation
            const delBtn = document.createElement('button');
            delBtn.id = 'del-btn';
            if (delBtn.id = 'del-btn') {
                delBtn.innerText = 'X'
            }
            bodyRow.appendChild(delBtn);

            const readBtn = document.createElement('button');
            readBtn.id = 'read-btn';
            if (readBtn.id = 'read-btn') {
                readBtn.innerText = 'Read Toggle';
            }
            bodyRow.appendChild(readBtn);

            tableBody.appendChild(bodyRow);
        }
        
    table.appendChild(tableBody);
    bookshelf.appendChild(table);
};

window.onload = (e) => {
    generateTable();
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    updateDisplay();
    clearForm();
});

function updateDisplay() {
    var newVal = newBook;
    const body = document.querySelector('tbody');
    const row = document.createElement('tr');
    row.id = 'book-entry';

    for (item in newBook) {
        const cell = document.createElement('td');
        newBook.title = $title.value;
        newBook.author = $author.value;
        newBook.read = $read.value;
        cell.innerHTML = `${newVal[item]}`;
        row.appendChild(cell);
    }
    // button creation
    const delBtn = document.createElement('button');
    delBtn.id = 'del-btn';
    if (delBtn.id = 'del-btn') {
        delBtn.innerText = 'X'
    }
    row.appendChild(delBtn);

    const readBtn = document.createElement('button');
    readBtn.id = 'read-btn';
    if (readBtn.id = 'read-btn') {
        readBtn.innerText = 'Read Toggle';
    }
    row.appendChild(readBtn);

    body.appendChild(row);
};


function addBookToLibrary() {
        newBook.title = $title.value;
        newBook.author = $author.value;
        newBook.read = $read.value;
        myLibrary.push(newBook);
        console.log(myLibrary);
};



// function updateDisplay() {
//     newVal = newBook;
//     const row = document.createElement('tr');
//     row.id = 'book-data';
//     for (item in newBook) {
//         const cell = document.createElement('td');
//         newBook.title = $title.value;
//         newBook.author = $author.value;
//         newBook.read = $read.value;
//         cell.innerHTML = `${newVal[item]}`;
//         row.appendChild(cell);
//     }
//     // for (let i = 0; i < 1; i++) {
//     //     const btn = document.createElement('button');
//     //     btn.innerText = 'X';
//     //     btn.id = 'delete-btn';
//     //     row.appendChild(btn);
//     // }
//     // for (let i = 0; i < 1; i++) {
//     //     const btn = document.createElement('button');
//     //     btn.innerText = 'Read Status';
//     //     btn.id = 'read-status-btn';
//     //     row.appendChild(btn);
//     // }
//     table.appendChild(row);
// };


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
