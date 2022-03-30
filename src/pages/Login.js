import axios from 'axios';
import React, { Component } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    var formData = {
      email,
      password,
    };

    return axios.post('http://localhost:5000/api/customerlogin', { ...formData })
      .then((res) => {
        if (res.data.status == "200") {
          alert("Login successfull");
          window.location.href = '/home';
        } else {
          alert("Invalid Login");
        }

      })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
            <div className='signupform loginform'>
              <h3 className='text-center'>Login Form</h3>
              <Form onSubmit={(e) => this.handleSubmit(e)} id="formElement">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" onChange={this.handleInputChange} name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" onChange={this.handleInputChange} name="password" placeholder="Password" />
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

export default Login;