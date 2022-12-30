import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const ProductComponent = () => {
    const products = useSelector((state) => { 
        console.log('state: ', state);
        return state.products});
    const renderList = products.map((product) => {
        const { id, title, image, price } = product;

        return (
            <div className="col-md-3 mb-4">
                <Card className="card h-100 text-center p-4" key={id}>
                   
                        <Card.Img variant="top" src={image} alt={title} height="250px" />
                        <Card.Body>
                            <h5 className=" mb-0">{title.substring(0, 12)}...</h5>
                                <p className=" lead fw-bold">${price}</p>
                            <Link to={`/product/${id}`}>
                            <button className="btn btn-outline-dark me-2">Buy Now</button>
                            </Link>

                        </Card.Body>
                </Card>
            </div>
        );
    })

    return (
        <>
            {renderList}
        </>
    );
};

export default ProductComponent;