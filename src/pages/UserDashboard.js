import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class UserDashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <ul>
                            <li><Link as={Link} to="/userdashboard"> Dash Board</Link></li>
                            <li><Link as={Link} to="/list">List</Link></li>
                            <li><Link as={Link} to="/changepassword">Change Password</Link></li>
                            <li><Link as={Link} to="/logout">Log Out</Link></li>
                        </ul>
                    </Col>
                    <Col md={9}>
                        <h1>dsbgkdjgfnjkldsnf</h1>
                    </Col>
                </Row>

            </Container>
        );
    }
}
export default UserDashboard;