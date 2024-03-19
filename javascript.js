/* 
refactor Book constructor -> Book class
*/

const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    displayInfo() {
        return `${this.title} ${this.author} ${this.pages} ${this.read}`;
    }

    toggleRead() {
        this.read = !this.read;
    }

};

function toggleReadStatus(index) {
    myLibrary[index].toggleRead();
    render();
};

const defBook1 = new Book('The War of the Worlds', 'H.G. Wells', 231, true);
const defBook2 = new Book('Lord of the Flies', 'William Golding', 315, false);

Object.setPrototypeOf(defBook1, Book);
Object.setPrototypeOf(defBook2, Book);

myLibrary.push(defBook1);
myLibrary.push(defBook2);



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
            <p class='title'>${book.title}</h3>
            <p class='author'>${book.author}</h4>
        </div>
        <div class='card-body'>
            <p>${book.pages} Pages</p>
            <p id='read-status'>${book.read ? "Read" : "Not Read"}</p>
            <button class='del-btn'>x</button>
            <button class='toggle-btn'>Toggle</button>
        </div>
        `;
        bookDisplay.appendChild(bookEl);
    }
    buttonEvents();
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
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    // form.style.justifyContent = 'center';
    // form.style.alignItems = 'center';
    form.style.gap = '1vh';
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


function buttonEvents() {
    const bookEls = Array.from(document.querySelector('.shelf').children);
    console.log(bookEls);
    bookEls.forEach(function(item, index) {
        console.log(item,item.children,index);
        const btnsArr = Array.from(item.children[1]);
        let delBtn = btnsArr[2];
        let toggleBtn = btnsArr[3];

        delBtn.addEventListener(function(e) {
            e.preventDefault();
            deleteBook(index);
            render();
        })

        toggleBtn.addEventListener(function(e) {
            e.preventDefault();
            toggleReadStatus(index);
            render();
        })

    })
}