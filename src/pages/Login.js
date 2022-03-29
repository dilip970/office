import React,{ Component} from 'react';
import { Button,Form,Container,Row,Col} from 'react-bootstrap';

class Login extends Component
{
    render(){
        return (
          
            <Container>
            <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
            <div className='signupform loginform'>
            <h3 className='text-center'>Login Form</h3>
             <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
