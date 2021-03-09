const wrap = document.querySelector('book-list li:nth-child(2) .name');
// console.log(wmf);

var book =document.querySelector('#book-list li .name');
//console.log(books);

book = document.querySelectorAll('#book-list li .name');
//console.log(books);

Array.from(book).forEach(function(book){
    console.log(book);
});    