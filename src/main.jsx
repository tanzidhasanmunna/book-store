import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ReadBookList from './components/ReadBookList/ReadBookList.jsx';
import WishBookList from './components/WishBookList/WishBookList.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/listedBooks/",
        element: <ListedBooks/>,
        children: [
          {
            path: "/listedBooks/readBooks",
            loader: () => fetch("/public/booksDetails.JSON"),
            element: <ReadBookList/>
          },
          {
            path: "/listedBooks/wishlistBooks",
            loader: () => fetch("/public/booksDetails.JSON"),
            element: <WishBookList/>
          }
        ]
      },
      {
        path: "/pages_to_read",
        loader: () => fetch("/public/booksDetails.JSON"),
        element: <PagesToRead/>
      },
      {
        path: "/book_details/:book_id",
        loader: () => fetch("/public/booksDetails.JSON"),
        element: <BookDetails/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
