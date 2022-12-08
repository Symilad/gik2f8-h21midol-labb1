const BookDetails = (book) => {
    let html = `
    <div id="bookDetails" 
    class="book__details absolute inset-x-1 divide-y border-x-4 border-black  bg-red-300 p-2 w-48 top-10 mx-8">
        <img src="${book.coverImage}" alt="Omslaget för denna bok saknas">
            <ul class="list">
                <li>Author: ${book.author}</li>
                **********************
                <li>Title: ${book.title}</li>
                **********************
                <li>Pages: ${book.pages}</li>
                **********************
                <li>Release date: ${book.releaseDate}</li>
            </ul>
        </div>
    `;

    return html;
};