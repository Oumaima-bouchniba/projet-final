import React, { useState } from "react"
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Signup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="btn btn-outline-dark ms-2" onClick={handleShow}>
                <i className="fa fa-user-plus me-2"></i>
                Register      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5 className="Register fw-bolder">Register</h5>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fw-bold">User name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                           
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fw-bold">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="fw-bold">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="btn btn-outline-primary w-100 mt-5" type="submit">
                            Register
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Signup;

