import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
        };
    }

    componentDidMount() {
        return axios.get("http://localhost:5000/api/customerlist").then((res) => {
            let customer = res.data.data.product;
            this.setState({
                customer: customer,
            })
        })
    }
    handleClick = async (userid) => {
        const id = userid;
        alert("Are you want to delete?")
        return axios.delete("http://localhost:5000/api/delete-customer/" + id)
            .then((res) => {
                if (res.status == "200") {
                    alert("Delete Successfully")
                    window.location.reload();
                    // this.props.history.push('/userdashboard')
                } else {
                    alert("Something went Wrong....")
                }
            })
    }
    render() {
        let list = this.state.customer;
        list = (this.state.customer.map((customer, key) => {
            return (
                <tbody>
                    <tr>
                        <td>{++key}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.mobile}</td>
                        <td><Link as={Link} to={`/editlist/${customer.id}`}> <button  >EDIT</button></Link></td>
                        <td> <button onClick={() => this.handleClick(customer.id)}>DELETE</button></td>
                    </tr>
                </tbody>
            )
        }))
        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <ul>
                            <li><Link as={Link} to="/userdashboard"> Dash Board</Link></li>
                            <li><Link as={Link} to="/list">List</Link></li>
                            <li><Link as={Link} to="/changepassword"><a href="#">Change Password</a></Link></li>
                            <li><Link as={Link} to="/logout"><a href="#">Log Out</a></Link></li>
                        </ul>
                    </Col>
                    <Col md={9}>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>EDIT</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            {list}
                        </table>
                    </Col>
                </Row>

            </Container>
        );
    }
}
export default List;