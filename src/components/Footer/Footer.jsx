import { Link } from "react-router-dom";
import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <Link to="https://prometheus.org.ua/" target="_blank">Виконано в Prometheus © 2024</Link>
                </div>
            </div>
        </footer>
    )
}