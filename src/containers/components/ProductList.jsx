import React, { useEffect, useState,  } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";


const ProductList = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState();

    const getProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Error", err);
            });
        const filtredProducts = filter ? response.data.filter((item) => item.category === filter) : response.data;
        dispatch(setProducts(filtredProducts));
    };

    useEffect(() => {
        getProducts();
    }, [filter]);

    console.log("Products :", products);


    
    const filterProduct = (value) => {
        setFilter(value);
    }
   
    const ShowProducts = () => {
        return (
            <>
                <div className="ProductBtn d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick = {()=> filterProduct(null)} >All</button>
                    <button className="btn btn-outline-dark me-2" onClick = {()=> filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick = {()=> filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick = {()=> filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick = {()=> filterProduct("electronics")}>Electronics</button>
                </div>
              
                    <ProductComponent />
                
                
            </>
        )
    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ShowProducts />

                </div>
            </div>
        </div>


    );

}

export default ProductList;