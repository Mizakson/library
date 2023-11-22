const myLibrary = [];

/* constructor */
function Book() {
    this.title = title;
    this.author = author;
    this.read = true | false;
    // this.info = function() {
    //     return `${title} by ${author}, ${read}`;
    // };
};

// displayLibrary(myLibrary);

const addButton = document.querySelector('button');
const addBookForm = document.querySelector('.book-form');
const bookshelf = document.querySelector('table');

/* hide add-form on page load */
window.onload=function() {
    document.getElementById('book-form').style.display="none";
    console.log('LIBRARY OPENED...');
}

function buttonClick(a) {
    if (a === 1) {
        document.getElementById('book-form').style.display = "flex";
        document.getElementById('book-form').style.flexDirection = "column";
        console.log('ADDING BOOK...')
    } else {
        document.getElementById('book-form').style.display = "none";
    }
}

/* 
thought process:

1.
on form submit, take user data and make it into a new object that has 
Book as its prototype, push it to the array myLibrary

2. 
iterate through myLibrary to populate the table display

add status buttons later

*/

/* define 2 default books */
const defaultBook1 = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    read: true
}; 

const defaultBook2 = {
    title: 'The War of the Worlds',
    author: 'H.G. Wells',
    read: false
}


function addBookToLibrary(book) {
    const bookTitle = document.getElementById('title').innerHTML;
    const bookAuthor = document.getElementById('author').innerHTML;
    // const bookRead = document.getElementById('yes').value;
    // const bookNotRead = document.getElementById('no').value;

    book = new Book();
    book.title = bookTitle;
    book.author = bookAuthor;
    
    document.getElementById('yes').addEventListener('onclick', () => {
        book.read = true;
    })

    document.getElementById('no').addEventListener('onclick', () => {
        book.read = false;
    })

    myLibrary.push(book);
}

/* add default books */
addBookToLibrary(defaultBook1);
addBookToLibrary(defaultBook2);

/* iterate through array to display individual books */
function displayLibrary(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

