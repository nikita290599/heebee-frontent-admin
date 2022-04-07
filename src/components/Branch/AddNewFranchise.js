import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import useState from "react"
const AddNewFranchise = (props) => {
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
            <div className='row d-flex justify-content-center'>
                <div className='form-container'>
                    <div className='form-head'>Add New Franchise</div>
                    <div className='form-body'>
                        <Form>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Franchise Name </label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Full name"
                                        defaultValue="Franchise"
                                    
                                    />
                                </div></Col>
                              

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Location</label>
                                    <Form.Control
                                        required
                                        type=" "
                                        placeholder="phone"
                                        defaultValue="Location"
                                    
                                    />
                                </div></Col>
  

                            </Row>
                         
                            <div className="p-2"><button className='btn btn-primary btn-lg ' >Submit</button></div>

                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AddNewFranchise;