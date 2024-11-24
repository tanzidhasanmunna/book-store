
import { Link } from 'react-router-dom';
export default function Banner() {
  return (
    <main className="flex justify-center items-center mt-12 px-4">
    <div className="bg-gray-100 p-12 rounded-lg flex gap-60 flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6">Books to freshen up <br /> your bookshelf</h1>
            <button className="bg-green-500 text-white font-medium px-6 py-3 rounded-md"> <Link to="/listedBooks">View The List</Link> </button>
        </div>
        <img src="/src/assets/banner.png" alt="Book cover of 'The Dating Playbook for Men'" className="w-48 h-auto shadow-lg"/>
    </div>
</main>
  )
}
