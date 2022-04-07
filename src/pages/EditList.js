import React, { Component } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
class EditList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
            id: '',
        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,

        });
    };

    componentDidMount() {
        return axios.post("http://localhost:5000/api/get-customer-by-id", {
            id: 34,
        }).then((res) => {
            let data = res.data.data.customer_id_details[0];
            this.setState({
                name: data.name,
                mobile: data.mobile,
                email: data.email,
                id: data.id
            })
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const { name, email, mobile, id } = this.state
        var formData = {
            name,
            email,
            mobile,
            id: 34,
        };
        return axios.patch('http://localhost:5000/api/update-customer', { ...formData })
            .then((res) => {
                if (res.data.status == "200") {
                    alert("Your Update is successfully completed....");
                    window.location.href = '/list';
                }
            })
            .catch(err => {
                console.error(err);
                alert(err);

            });
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={3}></Col>

                    <Col xs={6}>
                        <div className='signupform'>
                            <h3 className='text-center'>Edit Details</h3>

                            <Form onSubmit={(e) => this.handleSubmit(e)} id="formElement">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" placeholder="Enter your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="number" value={this.state.mobile} onChange={this.handleInputChange} name="mobile" placeholder="Enter your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" value={this.state.email} onChange={this.handleInputChange} name='email' placeholder="Enter your email" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );

    }
}

export default EditList;
