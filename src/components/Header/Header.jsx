import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <header className="flex justify-between items-center p-6">
                        <div className="text-2xl font-bold">Book Vibe</div>
                        <nav className="hidden md:flex space-x-6">
                            <NavLink to="/" className="text-lg font-medium text-black px-3 py-1">Home</NavLink>
                            <NavLink end to="/listedBooks/readBooks" className="text-lg font-medium text-black px-3 py-1">Listed Books</NavLink>
                            <NavLink to="/pages_to_read" className="text-lg font-medium text-black px-3 py-1">Pages to Read</NavLink>
                        </nav>
                        <div className="hidden md:flex space-x-4">
                        <button className="btn  bg-green-500 text-white font-medium px-4 py-2 rounded-md mb-2">Sign In</button>
                        <button className="btn bg-blue-400 text-white font-medium px-4 py-2 rounded-md">Sign Up</button>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                                <FaBars />
                            </button>
                        </div>
                    </header>
                    {isOpen && (
                        <div className="md:hidden bg-gray-100 p-4 flex flex-col">
                            <NavLink to="/" className="text-lg font-medium text-black px-3 py-1">Home</NavLink>
                            <NavLink to="/" className="text-lg font-medium text-black  px-3 py-1">Listed Books</NavLink>
                            <NavLink to="/" className="text-lg font-medium text-black   px-3 py-1">Pages to Read</NavLink>
                            <button className="btn  bg-green-500 text-white font-medium px-4 py-2 rounded-md mb-2">Sign In</button>
                            <button className="btn bg-blue-400 text-white font-medium px-4 py-2 rounded-md">Sign Up</button>
                        </div>
                    )}
    </>
  );
}
