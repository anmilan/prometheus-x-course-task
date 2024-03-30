import { useState } from "react";

export default function FullCart(props) {
    const [listOfBooksInCart, setListOfBooksInCart] = useState(JSON.parse(localStorage.getItem("books")))

    function purchaseBooks() {
        let purchase = true;
        props.onChangeCart(purchase)
        localStorage.removeItem('books')
        localStorage.removeItem('booksList')
        localStorage.removeItem('count')
    }

    let price = listOfBooksInCart.reduce((sum, book) => {
        return sum += +book.totalPrice;
    }, 0)

    return (
        <div className="cart">
            <div className="purchase">
                <button onClick={purchaseBooks} type="submit" className="btn btn-purchase">Purchase</button>
            </div>
            <div className="purchase__books">
                <div className="purchase__books-list">
                    {listOfBooksInCart.map((book) => {
                        return (
                            <div className="purchase__books-book" key={book.id}>
                                <div className="purchase-book-name">{book.title}</div>
                                <div className="count">
                                    <div className="count__container">
                                        items: <b style={{ marginLeft: 10 }}>{book.count}</b>
                                    </div>
                                    <div className="purchase-book-price">{book.totalPrice}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="total-price">
                <p>Total Price: </p>
                <div className="price">{price.toFixed(2)}</div>
            </div>
        </div>
    )
}