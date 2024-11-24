import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../localStorage";
import BookRep from "../BookRep/BookRep";
import { useContext, useEffect, useState } from "react";
import Context from "./../../context";

export default function ReadBookList() {
  const allBooks = useLoaderData();
  const storeBookId = getStoredBook();
  
  const storeBooks = allBooks.filter((book) =>
    storeBookId.includes(book.bookId)
  );
  const [sortedBook, setSortedBook] = useState(storeBooks);
  const { by } = useContext(Context);

  const handelFilter = () => {

    if (by === 'rating'){
      const sortedBooks = storeBooks.sort((a, b) => a.rating  - b.rating);
      setSortedBook(sortedBooks);

    }
    else if (by === 'noOfPages'){
      const sortedBooks = storeBooks.sort((a, b) => a.totalPages - b.totalPages);
      setSortedBook(sortedBooks);
    }
    else if (by === 'yearOfPublishing'){
      const sortedBooks = storeBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      setSortedBook(sortedBooks);
    }
  }
  
  useEffect(() => {
    handelFilter();
  }, [by]);
  return (
    <div>
      {sortedBook.map((book) => (
        <BookRep key={book.bookId} book={book} />
      ))}
    </div>
  );
}
