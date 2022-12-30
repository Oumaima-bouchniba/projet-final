import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux/actions/AuthAction";

const Login = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const errorMessage = useSelector((state) => state.authReducer.errors);
    console.error(errorMessage);
    const isAuth = useSelector((state) => state.authReducer.isAuthenticated);
    console.log(isAuth);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="btn btn-outline-dark ms-auto" onClick={handleShow}>
                <i className="fa fa-sign-in me-2"></i>
                Login
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5 className="Login fw-bolder">Login</h5>
                    {errorMessage && <p>{errorMessage}</p>}
                </Modal.Header>
                <Modal.Body>
                    <button className="btn btn-primary w-100 mb-4">
                        <span className="fa fa-google me-2"></span>Sign in with google
                    </button>
                    <button className="btn btn-primary w-100 mb-4">
                        <span className="fa fa-facebook me-2" ></span>Sign in with facebook
                    </button>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fw-bold">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="fw-bold">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="btn btn-outline-primary w-100 mt-5" type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(signIn(user, navigate));
                            }}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Login;