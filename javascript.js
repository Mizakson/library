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

myLibrary.push(defBook1.displayInfo());
myLibrary.push(defBook2.displayInfo());

const form = document.getElementById('form');
const bookshelf = document.querySelector('.bookshelf');
const $title = document.getElementById('title');
const $author = document.getElementById('author');
const $read = document.getElementById('read');
const table = document.getElementById('books');

console.log(defBook1.displayInfo());
console.log(defBook2.displayInfo());

