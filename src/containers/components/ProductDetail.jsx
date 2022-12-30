import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct, addToCart, delFromCart } from "../redux/actions/productAction";



const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add To Cart");
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description, rating } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  console.log(product);

  const handleCart = (product) => {
    if(cartBtn === "Add To Cart"){
      dispatch(addToCart(product))
      setCartBtn ("Remove From Cart")
    }else {
      dispatch(delFromCart(product))
      setCartBtn ("Add To Cart")
    }
  }
  console.log(cartBtn);

  const getProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log("Error", err);
      });
    dispatch(selectedProduct(response.data));
  };


  useEffect(() => {
    if (productId && productId !== "") getProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, []);


  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={image} alt={title} height="400px" width="400px" />
        </div>
        <div className="Cart col-md-6">
          <h4 className="text-uppercase text-black-50">{category}</h4>
          <h1 className="display-5">{title}</h1>
          <p className="lead fw-bolder">
            Rating {rating && rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            ${price}
          </h3>
          <p className="lead">
            {description}
          </p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>handleCart(product)}>{cartBtn}</button>
          <NavLink to={`/cart`} className="btn btn-dark ms-2 px-3 py-2">Go To Cart</NavLink>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="container py-5">
        <div className="row py-4">
          <ShowProduct />
        </div>

      </div>
    </>
  );
};

export default ProductDetail;

