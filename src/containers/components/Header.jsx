import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Sigup";

const Header = () => {
    return (
        <Navbar className="Navbar py-3 shadow-sm" bg="white" expand="lg">
            <Container>
                <NavLink to={`/`} className="navbar-brand">Free-Shop</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="nav mx-auto mb-2 mb-lg-0"
                        navbarScroll>
                        <NavLink to={`/`} className="navLink me-2 "> Home </NavLink>
                        <NavLink to={`/products`} className="navLink me-2">Products</NavLink>
                        <NavLink to={`/about`} className="navLink me-2">About</NavLink>
                        <NavLink to={`/contact`} className="navLink">Contact</NavLink>
                    </Nav>
                    <div className="buttons">
                        <Login />
                        <Signup />
                        <CartBtn/>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default Header;