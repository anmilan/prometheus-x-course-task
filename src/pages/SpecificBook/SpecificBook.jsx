import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useBooks } from "../../context/use-books";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./specificBook.css"

export default function SpecificBook() {
    const books = useBooks();
    const { id } = useParams();
    const name = JSON.parse(localStorage.getItem("userName"));

    const [totalPrice, setTotalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(() => {
        if (books.length) {
            setPrice(books[id - 1].price)
        }
    }, [books, id])

    useEffect(() => {
        setTotalPrice(price)
    }, [price])

    const [count, setCount] = useState(1);

    function inputPriceHandler(event) {
        setCount(event.target.value);
    }

    function reduceCount(e) {
        e.preventDefault()
        setCount(+count - 1)
    }

    function increaseCount(e) {
        e.preventDefault()
        setCount(+count + 1)
    }

    useEffect(() => {
        setTotalPrice((count * price).toFixed(2));
    }, [count, price])

    const [addToCartVisible, setAddToCartVisible] = useState(false);

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count, addToCartVisible])
    useEffect(() => {
        localStorage.removeItem('count', JSON.stringify(count))
    }, [])

    const [booksInCart, setBooksInCart] = useState(JSON.parse(localStorage.getItem(`books`)))

    useEffect(() => {
        localStorage.setItem(`books`, JSON.stringify(booksInCart))
    }, [booksInCart])

    function addBookToCart(e) {
        e.preventDefault()
        setAddToCartVisible(true);
        checkBookInCart()
    }

    function checkBookInCart() {
        const bookObject = {
            id: id,
            title: books[id - 1].title,
            count: count,
            totalPrice: totalPrice
        }
        if (!booksInCart) {
            setBooksInCart([bookObject])
        } else {
            booksInCart.forEach((item) => {
                if (item.id !== id) {
                    setBooksInCart(booksInCart => [...booksInCart, bookObject])
                }
            })
        }
    }

    if (!name) {
        return <Navigate push to="/" />
    }

    return (
        <>
            <Header count={count} addToCartClick={addToCartVisible} id={id} booksStorage={booksInCart} />
            <main>

                {books.length && <div className="container">
                    <div className="container-wrapper">
                        <section className="specific-book">
                            <div className="book__header">
                                <div className="book__image" style={{ cursor: "initial" }}>
                                    <img src={books[id - 1].image ? books[id - 1].image : "../images/imageNotFound.png"} alt="book" />
                                </div>
                                <div className="book__side-info">
                                    <div className="book__title">
                                        <h1>{books[id - 1].title}</h1>
                                    </div>
                                    <div className="specific-book__author">Author(s): {books[id - 1]?.author}</div>
                                    <div className="book__level">Book level: {books[id - 1].level}</div>
                                    <div className="book__tags">Book tags: {books[id - 1].tags.map((tag, index, tags) => <span key={index}>{index !== tags.length - 1 ? tag + "," : tag} </span>)}</div>
                                </div>
                            </div>
                            <div className="book__description">
                                {books[id - 1].description}
                            </div>
                        </section>
                        <section>
                            <form className="form" action="#">
                                <ul>
                                    <li>
                                        <p>Price, $</p>
                                        <p className="item-price">{price}</p>
                                    </li>
                                    <li>

                                        <div className="count">
                                            <p>Count</p>
                                            <div className="count__container">
                                                <button onClick={reduceCount} disabled={count < 1} className="remove-btn">-</button>
                                                <input onInput={inputPriceHandler} value={count} id="count__input" type="number" name="count-input" />
                                                <button onClick={increaseCount} disabled={count > 41} className="add-btn">+</button>
                                            </div>

                                        </div>
                                    </li>
                                    <li>
                                        <p>Total Price, $</p>
                                        <p className="book-total-price">{totalPrice}</p>
                                    </li>
                                </ul>
                                <button onClick={addBookToCart} className="btn add-to-cart" type="button">Add to cart</button>
                            </form>
                        </section>
                    </div>
                </div >}
            </main >
            <Footer />
        </>
    )
}