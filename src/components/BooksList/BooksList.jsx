import Book from "../Book/Book";
import "./booksList.css"

export default function BooksList(props) {
    return (
        <div id="books-list" className="books__list">
            {props.booksList && props.booksList.map(book => {
                return <Book book={book} key={book.id} />
            })}
        </div>
    )
}
