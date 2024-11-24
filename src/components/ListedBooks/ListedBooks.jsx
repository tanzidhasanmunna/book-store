import {  FaChevronDown} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Context from './../../context';
import { useState } from "react";


export default function ListedBooks() {

  const [by, setBy] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen p-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold text-center mb-4">Books</h1>
                        <details className="dropdown flex justify-center ">
                          <summary className="btn m-1">Sort By <FaChevronDown className="ml-2 " /></summary>
                          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={ () => setBy("rating")}><a>Rating</a></li>
                            <li onClick={ () => setBy("noOfPages")}><a>Number of Pages</a></li>
                            <li onClick={ () => setBy("yearOfPublishing")}><a>Publisher Year</a></li>
                          </ul>
                        </details>
                        <div className="flex justify-center mb-4">
                            <div className="bg-white shadow-md rounded-lg p-2 flex">
                                <NavLink to="/listedBooks/readBooks" className="px-4 py-2 focus:outline-none">Read Books</NavLink>
                                <NavLink to="/listedBooks/wishlistBooks" className="px-4 py-2 focus:outline-none">Wishlist Books</NavLink>
                            </div>
                        </div>
                        <Context.Provider value={{by}}>
                          <Outlet />
                        </Context.Provider>

                    </div>
                </div>
  )
}
