import React from "react"
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, maxime ut quos debitis quas nemo magnam veniam quod sequi, impedit adipisci libero sapiente ex pariatur id voluptatibus eius mollitia ipsa, delectus optio exercitationem praesentium. Non repellat accusamus quibusdam! Sapiente maxime vero beatae voluptatibus molestias eos optio saepe debitis, eligendi, sed alias nulla excepturi voluptas aliquam quas modi nisi, sit obcaecati rem laborum assumenda! Facere doloremque aliquid, iure velit alias deleniti minima quis quas similique beatae ipsum voluptatem quisquam tenetur ducimus vel nisi quo ut quae ex laudantium sapiente obcaecati cum enim odit. Odio numquam eaque accusamus, et iusto vitae labore!</p>
                        <NavLink to={`/contact`} className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.png" alt="about us" height="400px" width="600px"  />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;