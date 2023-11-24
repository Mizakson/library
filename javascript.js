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

const form = document.getElementById('form');
const bookshelf = document.querySelector('.bookshelf');

form.addEventListener('submit', function addBookToLibrary(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const obj = Object.fromEntries(data.entries());
    JSON.stringify(obj);
    myLibrary.push(obj);
    console.table(myLibrary);
});
