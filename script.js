'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

  const elements = document.querySelectorAll('.book-list__details');

  for(let i = 0; i < elements.length; i++){

    elements[i].addEventListener('mouseenter', (e) => {
  
      let book = getBookDetails(e.target.id)
      book.then(function (result){
        renderBookItem(result);
      })
    });

    elements[i].addEventListener('mouseleave', () => {
      const element = document.getElementById('bookDetails');
      element.remove();
    });
  }
}

function renderBookItem(book){

  const elements = document.getElementById('bookDetails');

  elements && element.remove();
  let html = BookDetails(book);
  root.insertAdjacentHTML('afterbegin', html);
  

}
