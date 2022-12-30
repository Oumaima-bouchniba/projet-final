import React from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartBtn = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <>
            <NavLink to={`/cart`} className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-2"></i>Cart ( {cart.length} )
            </NavLink>
        </>
    )
}

export default CartBtn;