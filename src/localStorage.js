
const getStoredBook = () => {
    const storedBook = localStorage.getItem('book-stored');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

const setStoredBook = (bookId) => {
    const currentBooks = getStoredBook();
    if(!currentBooks.find(book => book === bookId)){
        currentBooks.push(bookId);
        localStorage.setItem('book-stored', JSON.stringify(currentBooks));
        return false;
    }
    return true;
}

const getWhiteListBooks = () => {
    const whiteListBooks = localStorage.getItem('white-list-books');
    if (whiteListBooks) {
        return JSON.parse(whiteListBooks);
    }
    return [];
}

const setWhiteListBooks = (bookId) => {
    const currentBooks = getWhiteListBooks();
    const readBooks = getStoredBook();
    if(!currentBooks.find(book => book === bookId) && !readBooks.find(book => book === bookId)){
        currentBooks.push(bookId);
        localStorage.setItem('white-list-books', JSON.stringify(currentBooks));
        return false;
    }
    return true;
    
}
export { getStoredBook, setStoredBook, getWhiteListBooks, setWhiteListBooks}