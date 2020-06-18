import React, { Component } from 'react'
import User from '../components/User.js'
import { Row, Col } from 'reactstrap';
import UserConsumer from '../context.js'


class Users extends Component {
    render() {
        return(
            <UserConsumer>
                {
                    value => {
                        const{users}=value;
                        return (
                            <Row className="mt-5">
                                <Col xs="2"></Col>
                                <Col xs="8">
                                    {
                                       users.map(user=>{
                                           return(
                                            <User
                                            id={user.id}
                                            name={user.name}
                                            salary={user.salary}
                                            job={user.job} 
                                            department ={user.department}
                                           />
                                           )
                                       })  
                                    }
                                   
                                </Col>
                                <Col xs="2"></Col>
                            </Row>
                
                
                        )
                    }
                    
                }
            </UserConsumer>
        )
        
    }
}
export default Users;