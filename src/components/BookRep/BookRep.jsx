import { FaBuilding, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from "prop-types";
export default function BookRep({book}) {
    const {bookName, author,image, totalPages,rating,  category, tags, publisher, yearOfPublishing} = book;
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row">
    <img src={image} alt="Book cover of 'What Do You Hate About Money?'" className="w-24 h-36 object-cover mr-4 mb-4 md:mb-0"/>
    <div className="flex-1">
        <h2 className="text-xl font-bold">{bookName}</h2>
        <p className="text-gray-600">By : {author}</p>
        <div className="flex items-center space-x-2 mt-2 flex-wrap">
            {
                tags.map((tag, index) => (
                    <span key={index} className="bg-green-200 text-green-800 px-2 py-1 rounded">{tag}</span>
                ))
            }
            <span className="text-gray-600 flex items-center"><FaMapMarkerAlt className="mr-1" /> Year of Publishing: {yearOfPublishing}</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 flex-wrap">
            <span className="text-gray-600 flex items-center"><FaBuilding className="mr-1" /> Publisher: {publisher}</span>
            <span className="text-gray-600 flex items-center"><FaFileAlt className="mr-1" /> Page {totalPages}</span>
        </div>
        <div className="flex items-center space-x-2 mt-4 flex-wrap">
            <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Category: {category}</span>
            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">Rating: {rating}</span>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full">View Details</button>
        </div>
    </div>
</div>
  )
}

BookRep.propTypes = {
    book: PropTypes.shape({
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        totalPages: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        publisher: PropTypes.string.isRequired,
        yearOfPublishing: PropTypes.number.isRequired
    })
}