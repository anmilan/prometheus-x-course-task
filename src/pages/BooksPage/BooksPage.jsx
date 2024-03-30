import { useState } from "react";
import { useBooks } from "../../context/use-books";
import { Navigate } from "react-router-dom";
import BooksList from "../../components/BooksList/BooksList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./booksPage.css"

export default function BooksPage() {
    const name = JSON.parse(localStorage.getItem("userName"));

    const books = useBooks();

    const [bookName, setBookName] = useState('');
    const [booksList, setBooksList] = useState(books)

    function handleChangeName(event) {
        let filteredBooks = [];
        setBookName(event.target.value);
        if (bookName) {
            filteredBooks = books.filter((book) => book.title.toLowerCase().includes(bookName.toLowerCase()));
            setBooksList(filteredBooks);
        } else { setBooksList(books) }
    }

    function searchBookName() {
        if (bookName) {
            const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(bookName.toLowerCase()));
            setBooksList(filteredBooks);
        } else { setBooksList(books) }
    }

    function handleChangePrice(event) {
        if (books) {
            if (event.target.value === "any") {
                setBooksList(books);
            } else if (event.target.value === "up-to-fifteen") {
                setBooksList(books.filter((book) => book.price < 15));
            } else if (event.target.value === "fifteen-thirty") {
                setBooksList(books.filter((book) => book.price > 15 && book.price < 30));
            } else if (event.target.value === "thirty") {
                setBooksList(books.filter((book) => book.price > 30));
            }
        }
    }

    if (!name) {
        return <Navigate push to="/" />
    }

    return (
        <>
            <Header />
            <main className="books-content">
                <div className="container">
                    <div className="books">
                        <div className="books__filters">
                            <div className="books__filters-name">
                                <input value={bookName} className="by-name" onChange={handleChangeName} name="by-name" type="text" placeholder="Search book by name" />
                                <button className="btn-by-name" onClick={searchBookName} type="button">
                                    <img src="../images/search.svg" alt="search" width="25px" height="25px" />
                                </button>
                            </div>
                            <form name="selectPrice" onChange={handleChangePrice} className="books__filters-price">
                                <select className="by-price" name="price">
                                    <option value="any">Any Price</option>
                                    <option value="up-to-fifteen">Up to 15$</option>
                                    <option value="fifteen-thirty">15$ - 30$</option>
                                    <option value="thirty">30$+</option>
                                </select>
                            </form>
                        </div>
                        {!!books.length && <BooksList
                            bookName={bookName}
                            booksList={booksList} />}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}