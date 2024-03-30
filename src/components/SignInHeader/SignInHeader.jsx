import { Link } from 'react-router-dom';
import './signInHeader.css'

export default function SignInHeader() {
    const name = localStorage.getItem('userName') || "";

    return (
        <header>
            <section className="title">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar__wrapper">
                            <Link to="/" className="navbar__brand">X-corse task / Andrii Kalashnikov</Link>
                            <Link to="/books"><button type="button" disabled={name.length <= 4 || name.length >= 15} className="btn" title="Username should be more then 3 symbols">Sign-in</button></Link>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    )
}