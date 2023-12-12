/* 
project refresh
*/

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.displayInfo = function() {
        return `${this.title} ${this.author} ${this.pages} ${this.read}`;
    }
}

Book.constructor.prototype.toggleReadStatus = function() {
    this.read = !this.read;
};

function toggleReadStatus(index) {
    myLibrary[index].toggleReadStatus();
    render();
};

const defBook1 = new Book('The War of the Worlds', 'H.G. Wells', 231, true);
const defBook2 = new Book('Lord of the Flies', 'William Golding', 315, false);

myLibrary.push(defBook1);
myLibrary.push(defBook2);

Object.setPrototypeOf(defBook1, Book);
Object.setPrototypeOf(defBook2, Book);

const newBookBtn = document.getElementById('add-book');
const form = document.querySelector('form');
const $title = document.getElementById('title');
const $author = document.getElementById('author');
const $pages = document.getElementById('pages');
const $read = document.getElementById('read');
const display = document.querySelector('.display');


function render() {
    let bookDisplay = document.querySelector('.shelf');
    bookDisplay.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.classList.toggle('card');
        bookEl.innerHTML = `
        <div class='card-header'>
            <h3 class='title'>${book.title}</h3>
            <h4 class='author'>${book.author}</h4>
        </div>
        <div class='card-body'>
            <p>${book.pages}</p>
            <p id='read-status'>${book.read ? "Read" : "Not Read"}</p>
            <button class='del-btn' onclick="deleteBook(${i})">X</button>
            <button class='toggle-btn' onclick="toggleReadStatus(${i})">Toggle</button>
        </div>
        `;
        bookDisplay.appendChild(bookEl);
    }
};


function addBookToLibrary() {
    const title = $title.value;
    const author = $author.value;
    const pages = $pages.value
    const read = $read.checked;
    
    const newBook = new Book(title, author, pages, read);
    Object.setPrototypeOf(newBook, Book);
    myLibrary.push(newBook);
    render();
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    clearForm();
});

newBookBtn.addEventListener("click", function() {
    form.style.display = 'block';
    console.log('NEW BOOK FORM');
});

function deleteBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function clearForm() {
    $title.value = '';
    $author.value = '';
    $pages.value = '';
}