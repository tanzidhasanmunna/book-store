import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Book({book}) {
    const {bookId, image, bookName, author, tags, genre, rating} = book;
  return (
    <Link to={`/book_details/${bookId}`}>
        <button className=" border rounded-lg p-4 m-4 shadow-lg w-full sm:w-64">
    <div className="bg-gray-100 p-4 rounded-lg">
        <img src={image} alt={bookName} className="w-full h-48 object-contain" />
    </div>
    <div className="mt-4">
        <div className="flex space-x-2">
            {tags.map((tag,idx) => (
                <span key={idx} className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
            ))}
        </div>
        <h2 className="text-lg font-bold mt-2">{bookName}</h2>
        <p className="text-gray-600">By : {author}</p>
        <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600">{genre}</span>
            <span className="flex items-center">
                {rating}
                <FaStar className="text-yellow-500 ml-1" />
            </span>
        </div>
    </div>
</button>
    </Link>
  )
}
