import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import FullCart from "../../components/FullCart/FullCart";
import "./cart.css"

export default function Cart() {
    const { id } = useParams();
    const name = JSON.parse(localStorage.getItem("userName"));
    const localItem = JSON.parse(localStorage.getItem(`books${id}`));

    const [ifPurchased, setIfPurchased] = useState(false)
    function changeCartHandler(purchased) {
        setIfPurchased(purchased)
    }

    const count = JSON.parse(localStorage.getItem("count"));

    if (!name) {
        return (<Navigate push to="/" />)
    }
    return (
        <>
            <Header count={count} purchased={ifPurchased} />
            <main className="cart-content">
                <div className="cart-container">
                    {!ifPurchased && count ? <FullCart onChangeCart={changeCartHandler} localItem={localItem} /> : <EmptyCart onChangeCart={changeCartHandler} />}
                </div>
            </main>
            <Footer />
        </>
    )
}