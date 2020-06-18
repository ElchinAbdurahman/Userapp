import React, { Component } from 'react'
import {
    Row, Col, Card, CardHeader, CardBody,
    Button, Form, FormGroup, Input,
    Label
} from 'reactstrap'
import posed from "react-pose"
import UserConsumer from '../context'
import Axios from 'axios';


const Animation = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
});


class AddUser extends Component {
    state = {
        isVisible: true,
        name: "",
        department: "",
        job:"",
        salary: "",
        error: false
    };



    onHideUser = (e) => {
        this.setState({ isVisible: !this.state.isVisible });
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = async (dispatch, e) => {
        e.preventDefault();
        const { name, department, salary ,job} = this.state

        const newUser = {
            name,
            department,
            job,
            salary
        }

        if (!this.validateForm()) {
            this.setState({
                error: true
            })
            return;
        }

        const response = await Axios.post("http://localhost:3004/users", newUser)
        dispatch({ type: "ADD_USER", payload: response.data })

        this.props.history.push("/");


    }

    validateForm = () => {
        const { name, salary, department,job } = this.state;
        if (name === "" || salary === "" || department === "" || job==="") {
            return false;
        }
        return true;

    }

    render() {
        const { isVisible, name, job,department, salary, error } = this.state;
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <Row className="mt-5">
                                <Col xs="3"></Col>
                                <Col xs="6">
                                    <Button onClick={this.onHideUser} className="btn btn-danger btn-block mb-2 mt-2">{isVisible ? "Hide Form" : "Show Form"}</Button>
                                    <Animation pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                        <Card>
                                            <CardHeader style={{ fontSize: "25px" }} className="font-weight-bold text-center">Add User</CardHeader>

                                            <CardBody>

                                                {
                                                    error ?
                                                        <div className="alert alert-danger">
                                                          Zəhmət olmasa daxil edilen məlumatları düzgün edin.
                                                        </div>
                                                        : null
                                                }

                                                <Form onSubmit={this.addUser.bind(this, dispatch)}>
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
                                                    <Button className="btn btn-dark btn-block">Add User</Button>
                                                </Form>



                                            </CardBody>
                                        </Card>
                                    </Animation>


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

export default AddUser;