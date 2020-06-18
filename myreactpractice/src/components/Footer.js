import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <Row className="bg-dark py-3 " style={{ marginTop: "31%" }}>
                <Col xs="12">
                    <p className="text-white text-center" style={{ fontSize:"23px" }}>All rights are reserved</p>
                </Col>
            </Row>



        )
    }
}
export default Footer;
