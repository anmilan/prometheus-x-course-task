import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import SignInHeader from "../../components/SignInHeader/SignInHeader";
import "./signIn.css"

export default function Signin() {
    const [name, setName] = useState('')

    function handleChange(event) {
        setName(event.target.value)
    }

    useEffect(() => {
        localStorage.setItem('userName', JSON.stringify(name))
    }, [name])

    return (
        <>
            <SignInHeader />
            <main>
                <div className="sign-in">
                    <img className="sign-in__avatar" src="../images/avatar.jpg" alt="avatar" />
                    <form className="sign-in__form" action="/books">
                        <label className="sign-in__label form-label" htmlFor="sign-in">Username</label>
                        <input className="sign-in__input" id="sign-in" onChange={handleChange} value={name} type="text" placeholder="Type Username" name="username" autoComplete="false" />
                        <Link to="/books">
                            <button className="btn" type="submit" disabled={name.length < 4 || name.length > 15} title="Username should be more then 3 symbols"> Sign-in</button>
                        </Link>
                    </form>
                </div>
            </main >
            <Footer />
        </>
    )
}