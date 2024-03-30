import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BooksProvider } from "../../context/use-books";

import BooksPage from "../../pages/BooksPage/BooksPage";
import SignIn from "../../pages/SignIn/SignIn";
import SpecificBook from "../../pages/SpecificBook/SpecificBook";
import Cart from "../../pages/Cart/Cart";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";

import "./app.css";


function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:3000/books.json")
      .then((result) => result.json())
      .then((json) => {
        setData(json.books);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BooksProvider value={data}>
        <div className="wrapper">
          <Routes>
            <Route path="prometheus-x-course-task/" element={<SignIn />} />
            <Route path="prometheus-x-course-task/books" element={<BooksPage />} />
            <Route path="prometheus-x-course-task/books/:id" element={<SpecificBook />} />
            <Route path="prometheus-x-course-task/cart" element={<Cart />} />
            <Route path="prometheus-x-course-task/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BooksProvider>
    </>
  );
}

export default App;
