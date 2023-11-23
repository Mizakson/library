/* 
project refresh
*/

const myLibrary = [];

function Book() {
    this.title = title;
    this.author = author;
    this.read = read;
}

const $title = document.getElementById('title');
const $author = document.getElementById('author');
const $read = document.getElementById('read');

function addBookToLibrary(book) {
    book = new Book($title.value, $author.value, $read.value);
    myLibrary.push(book);
}