import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import useState from "react"
const AddNewBranch = (props) => {
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
        <div className='row d-flex justify-content-center'>
            <div className='form-container'>
                <div className='form-head'>Add New Branch</div>
                <div className='form-body'>
                    <form>
                        <Row>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Branch Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">City Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                           

                        </Row>
                        <Row>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Region</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                        

                        </Row>
                        <Row>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Franchise</label>
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Franchise 1</option>
                                        <option value="1">Franchise 2</option>
                                        <option value="2">Franchise 3</option>
                                        <option value="3">Franchise n</option>
                                    </select>
                              
                            </div></Col>
                            
                        

                        </Row>
                      
                        <div className="p-2"><button className='btn btn-primary btn-lg ' >Submit</button></div>
                        
                    </form>
                </div>
            </div>
        </div>
    </Container>
    );
};

export default AddNewBranch;