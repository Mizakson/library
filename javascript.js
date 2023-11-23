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

const $title = document.querySelector('#title');
const $author = document.querySelector('#author');
const $read = document.querySelector('#read');
const $bookshelf = document.querySelector('.bookshelf');
const $form = document.querySelector('form');
