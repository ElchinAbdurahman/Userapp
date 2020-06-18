import React, { Component } from 'react'
import {
    Card, CardHeader, CardBody,
    CardTitle, CardText, Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserConsumer from '../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
    state = {
        isVisible: false
    }

    changeBlock = (e) => {
        this.setState(
            { isVisible: !this.state.isVisible }
        )
    }

    onDeleteUser = async (dispatch, e) => {
        const { id } = this.props;
        await axios.delete(`http://localhost:3004/users/${id}`)
        dispatch({ type: "DELETE_USER", payload: id })
    }
    render() {
        const { id, name, salary, department,job } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (

                            <Card style={{ marginBottom: '12px' }}>

                                <CardHeader className="bg-danger text-white font-weight-bold d-flex justify-content-between">
                                    <h3 onClick={this.changeBlock} style={{ fontSize: "20px", cursor: "pointer" }}>
                                        {name}
                                    </h3>

                                    <FontAwesomeIcon onClick={this.onDeleteUser.bind(this, dispatch)} style={{ fontSize: "20px", cursor: "pointer" }} icon="trash" />



                                </CardHeader>



                                {isVisible ?
                                    <CardBody className="" style={{ backgroundColor: "#455a64" }}>
                                        <CardText className="text-white font-weight-bold">Department: {department}</CardText>
                                        <CardText className="text-white font-weight-bold">Job: {job}</CardText>
                                        <CardTitle className="text-white font-weight-bold">Salary: {salary}</CardTitle>
                                        <Link to={`edit/${id}`} className="btn btn-dark btn-block mb-2 mt-2" style={{fontSize:"16px" }}>
                                          Update User
                                        </Link>
                                    </CardBody> : null
                                }

                            </Card>

                        )
                    }
                }
            </UserConsumer>

        )

    }
}
export default User;