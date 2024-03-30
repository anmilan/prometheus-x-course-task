export default function EmptyCart() {
    return (
        <div className="cart">
            <div className="purchase">
                <button type="submit" className="btn btn-purchase" disabled>Purchase</button>
            </div>
            <div className="cart-wrapper">
                <div className="empty-cart">
                    <img src="../images/cart.svg" alt="cart" />
                    <h3>Cart empty...</h3>
                </div>
            </div>
        </div>
    )
}