const myLibrary = [];

/* constructor */
function Book() {
    this.title = title;
    this.author = author;
    this.read = read;
    // this.info = function() {
    //     return `${title} by ${author}, ${read}`;
    // };
};

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

// displayLibrary(myLibrary);

const addButton = document.querySelector('button');
const addBookForm = document.querySelector('.book-form');

/* hide add-form on page load */
window.onload=function() {
    document.getElementById('book-form').style.display="none";
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