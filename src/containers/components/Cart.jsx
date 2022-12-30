import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delFromCart } from "../redux/actions/productAction"

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delFromCart(item))
    }

    const cartItems = cartProducts.map((cartItem) => {
        return (
            <>
                <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                    <div className="container py-4">
                        <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="close"></button>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{cartItem.title}</h3>
                                <p className="lead fw-bold">$ {cartItem.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to={`/checkout`} className="btn btn-outline-dark mb-3 w-25 mx-auto"> 
                     <p className="lead fw-bold">Proceed to Checkout </p>
                     </NavLink>
                </div>
            </div>
        )
    }
    return (
        <>
            {cartProducts.length === 0 && emptyCart()}
            {cartItems}
            {cartProducts.length !== 0 && button()}
        </>
    );
};
export default Cart;