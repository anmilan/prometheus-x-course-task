import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./pageNotFound.css"

export default function PageNotFound() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="message">
                        <p className="message-text">Oops,
                            something went wrong. 404 error</p>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}