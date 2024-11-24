import { useLoaderData } from "react-router-dom"
import { getWhiteListBooks } from "../../localStorage";
import BookRep from "../BookRep/BookRep";
import { useContext, useEffect, useState } from "react";
import Context from "../../context";


export default function WishBookList() {
  const allBooks = useLoaderData();
  const wishBookId = getWhiteListBooks();
  
  const { by } = useContext(Context);
  const wishBooks = allBooks.filter(book => wishBookId.includes(book.bookId));
  const [sortedWishBook, setSortedWishBook] = useState(wishBooks);
  const handelFilter = () => {

    if (by === 'rating'){
      const sortedBooks = wishBooks.sort((a, b) => a.rating  - b.rating);
      setSortedWishBook(sortedBooks);

    }
    else if (by === 'noOfPages'){
      const sortedBooks = wishBooks.sort((a, b) => a.totalPages - b.totalPages);
      setSortedWishBook(sortedBooks);
    }
    else if (by === 'yearOfPublishing'){
      const sortedBooks = wishBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      setSortedWishBook(sortedBooks);
    }
  }
  
  useEffect(() => {
    handelFilter();
  }, [by]);

  return (
    <div>
      {
        sortedWishBook.map(book => <BookRep key={book.bookId} book={book}/>)
      }
    </div>
  )
}

