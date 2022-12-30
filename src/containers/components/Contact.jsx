import React from "react"
import { Button, Form } from "react-bootstrap";

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have any issues ?</h1>
                        <hr />

                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/contactus.png" alt="contact us" height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="..... " />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                            <Button type="submit" variant="outline-primary">send Message</Button>{' '}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;