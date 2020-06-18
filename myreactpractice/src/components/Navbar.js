import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import '../Navi.css';

class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Row className="mt-1">
                
                <Col xs="12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/" style={{textDecoration:"none",fontSize:"19px"}}>
                                        <a className="nav-link" style={{color:"#fdfdfd"}} >Home</a>
                                    </Link>

                                </li>
                                <li className="nav-item active">
                                    <Link to="/" style={{textDecoration:"none",fontSize:"19px"}}>
                                        <a className="nav-link" style={{color:"#fdfdfd"}}>Users</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/add" style={{textDecoration:"none",fontSize:"19px"}}>
                                        <a className="nav-link" style={{color:"#fdfdfd"}} >Add User</a>
                                    </Link>

                                </li>

                                

                                <li className="nav-item">
                                    <Link to="/about" style={{textDecoration:"none",fontSize:"19px"}}>
                                        <a className="nav-link" style={{color:"#fdfdfd" }}>About</a>
                                    </Link>

                                </li>

                                
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </Col>
                <Col xs="0"></Col>
            </Row>




        );
    }

}
export default Navi;
