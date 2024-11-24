import { useLoaderData, useParams } from "react-router-dom"
import { setStoredBook, setWhiteListBooks } from "../../localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BookDetails() {
    const books = useLoaderData();
    const {book_id} = useParams();
    const Readed = () => toast.warn('Already Readed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const notify = (display) =>   toast.success(display, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    const book = books.find((book) => book.bookId === book_id);
    const handelAddToRead = () => {
      const exists =   setStoredBook(book_id)
      exists? Readed() : notify("Added To Read List")
    }
    const handelWishlist = () => {
        const exists = setWhiteListBooks(book_id)
        exists? Readed(): notify("Added To White List")
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img src={book.image} alt={book.bookName} className="rounded-lg shadow-md mx-auto"/>
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-3xl font-bold mb-2">{book.bookName}</h1>
            <p className="text-gray-600 mb-4">By : {book.author}</p>
            <p className="text-gray-800 mb-4">{book.genre}</p>
            <p className="text-gray-800 mb-4"><span className="font-bold">Review :</span>{book.review}</p>
            <p className="text-gray-800 mb-4"><span className="font-bold">Tag :</span> <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">#Young Adult</span> <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">#Identity</span></p>
            <p className="text-gray-800 mb-2"><span className="font-bold">Number of Pages:</span> {book.totalPages}</p>
            <p className="text-gray-800 mb-2"><span className="font-bold">Publisher:</span> {book.publisher}</p>
            <p className="text-gray-800 mb-2"><span className="font-bold">Year of Publishing:</span> {book.yearOfPublishing}</p>
            <p className="text-gray-800 mb-4"><span className="font-bold">Rating:</span> {book.rating}</p>
            <div className="flex space-x-4">
                <button onClick={() => handelAddToRead()} className="btn bg-blue-500 text-white px-4 py-2 rounded-lg">Read</button>
                <button onClick={() => handelWishlist()} className="btn bg-teal-500 text-white px-4 py-2 rounded-lg">Wishlist</button>
            </div>
        </div>
    </div>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition: Bounce/>
</div>
  )
}
