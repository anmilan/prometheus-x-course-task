import { Link } from "react-router-dom";
import "./header.css"
// import Test from "../../../public/images/test";

export default function Header(props) {
    const name = JSON.parse(localStorage.getItem("userName"));
    const count = JSON.parse(localStorage.getItem("count"));

    function clearData() {
        localStorage.removeItem('books');
        localStorage.removeItem('userName');
        localStorage.removeItem('count');
    }

    return (
        <header className="header">
            <div className="title">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar__wrapper">
                            <Link to="/books" className="navbar__brand">X-corse task / Andrii Kalashnikov</Link>

                            <ul className="navbar__list">
                                <li className="nav__item">
                                    <Link to="/cart" className="cart">
                                        <div className="cart-image">
                                            <img src="../images/cart.svg" alt="cart" width="38px" height="38px" />
                                            {count && !props.purchased && <div className="cart-count">{count}</div>}
                                        </div>
                                    </Link>

                                </li>
                                <li className="nav__item">
                                    <Link to="/" onClick={clearData}>
                                        <button type="button" className="btn">Sign-Out</button>
                                    </Link>
                                </li>
                                <li className="nav__item">
                                    <div className="user-avatar">
                                        <span className="user-avatar__img">
                                            <img src="../images/avatar.jpg" alt="avatar" width="38px" height="38px" />
                                        </span>
                                        <span className="user-avatar__name">{name}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        </header >
    )
}