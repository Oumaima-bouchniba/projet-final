import React from "react";
import { Card } from "react-bootstrap";
import ProductList from "./ProductList";


const Home = () => {
    return (
        <>
            <Card className="Card border-0">
                <img src="/assets/bg.jpg" alt="Background" />
                <Card.ImgOverlay>
                    <div className="container">
                        <h5 className="CardTitle display-3 fw-bold mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="CardText lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>

                </Card.ImgOverlay>
            </Card>
            <ProductList />
        </>
    );
};

export default Home;