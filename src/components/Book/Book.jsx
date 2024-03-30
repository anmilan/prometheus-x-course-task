import { Link } from "react-router-dom";
import "./book.css"

export default function Book(props) {
    const book = props.book;

    return (
        <div className="book" key={book.id} id={book.id}>
            <div className="book__top">
                <div className="book__image-wrapper">
                    <Link to={`/books/${book.id}`}>
                        <img className="book__image" src={book.image ? book.image : "../images/imageNotFound.png"} alt="book" />
                    </Link>
                </div>
                <div className="book__title">{book.title.length > 24 ? book.title.slice(0, 24) + "..." : book.title}</div>
                <div className="book__author">{book.author}</div>
                <div className="book__short-description">{book.shortDescription}</div>
            </div>
            <div className="book__bottom">
                <div className="book__price"><span>$</span>{book.price}</div>
                <Link to={`/books/${book.id}`}>
                    <button className="btn book__button">
                        View
                    </button>
                </Link>
            </div>
        </div>
    )
}  