import React, { Component } from 'react'
import {
    Row, Col, Card, CardHeader, CardBody,
    Button, Form, FormGroup, Input,
    Label
} from 'reactstrap'
import UserConsumer from '../context'
import axios from "axios";





class UpdateUser extends Component {
    state = {
        name: "",
        department: "",
        job:"",
        salary: "",
        error: ""
    };





    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const response = await axios.get(`http://localhost:3004/users${id}`);
        const { name, salary, department,job } = response.data;

        this.setState({
            name,
            salary,
            department,
            job
        });
    }

    validateForm = () => {
        const { name, salary, department,job } = this.state;
        if (name === "" || salary === "" || department === ""  || job==="") {
            return false;
        }
        return true;

    }


    updateUser = async (dispatch, e) => {
        e.preventDefault();

        // Update User
        const { name, salary, department,job } = this.state;
        const { id } = this.props.match.params;
        const updatedUser = {
            name,
            salary,
            department,
            job
        };
        if (!this.validateForm()) {
            this.setState({
                error: true
            })
            return;
        }
        const response = await axios.put(`http://localhost:3004/users/${id}`, updatedUser);

        dispatch({ type: "UPDATE_USER", payload: response.data });

        // Redirect
        this.props.history.push("/");
    }


    render() {
        const { name, department,job, salary, error } = this.state;
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <Row className="mt-5">
                                <Col xs="3"></Col>
                                <Col xs="6">
                                    <Card>
                                        <CardHeader style={{ fontSize: "25px" }} className="bg-danger text-white font-weight-bold text-center">Update User</CardHeader>

                                        <CardBody>

                                            {
                                                error ?
                                                    <div className="alert alert-danger">
                                                       Zəhmət olmasa daxil edilen məlumatları düzgün edin.
                                                    </div>
                                                    : null
                                            }

                                            <Form onSubmit = {this.updateUser.bind(this,dispatch)}>
                                                <FormGroup>
                                                    <Label for="name">Name</Label>
                                                    <Input
                                                        type="text"
                                                        name="name"
                                                        id="id"
                                                        placeholder="Enter Username"
                                                        value={name}
                                                        onChange={this.changeInput} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="department">Department</Label>
                                                    <Input
                                                        type="text"
                                                        name="department"
                                                        id="id1"
                                                        placeholder="Enter Department"
                                                        value={department}
                                                        onChange={this.changeInput} />
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="job">Job</Label>
                                                    <Input
                                                        type="text"
                                                        name="job"
                                                        id="id2"
                                                        placeholder="Enter Job"
                                                        value={job}
                                                        onChange={this.changeInput} />
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="salary">Salary</Label>
                                                    <Input
                                                        type="text"
                                                        name="salary"
                                                        id="id3"
                                                        placeholder="Enter Salary"
                                                        value={salary}
                                                        onChange={this.changeInput} />
                                                </FormGroup>
                                                <Button className="btn btn-dark btn-block">Update User</Button>
                                            </Form>



                                        </CardBody>
                                    </Card>


                                </Col>
                                <Col xs="3"></Col>
                            </Row>
                        )
                    }
                }
            </UserConsumer>
        )


    }
}

export default UpdateUser;