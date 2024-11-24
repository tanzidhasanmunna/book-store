import { useEffect, useState } from "react";
import Book from "../Book/Book";

export default function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("/booksDetails.JSON")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div>
            <h2 className="text-4xl text-center my-4">Books</h2>
            <div className="grid grid-cols-3 max-w-4xl mx-auto">
                {
                    books.map( book => <Book key={book.bookId} book={book}/>)
                }
            </div>
        </div>
    );
}

