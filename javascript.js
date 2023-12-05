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

const newBookBtn = document.getElementById('add-book');
const form = document.querySelector('form');
const $title = document.getElementById('title');
const $author = document.getElementById('author');
const $pages = document.getElementById('pages');
const $read = document.getElementById('read');


function addBookToLibrary() {
    const title = $title.value;
    const author = $author.value;
    const pages = $pages.value
    const read = $read.value;
    
    const newBook = new Book(title, author, pages, read);
    Object.setPrototypeOf(newBook, Book);
    myLibrary.push(newBook);
    console.log(myLibrary);

};

function clearForm() {
    $title.value = '';
    $author.value = '';
    $pages.value = '';
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    clearForm();
})

newBookBtn.addEventListener("click", function() {
    form.style.display = 'block';
    console.log('NEW BOOK FORM');
})