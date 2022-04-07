import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../../css/employee/addNewEmployee.css"
const AddNewEmp = (props) => {
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
            <div className='row d-flex justify-content-center'>
                <div className='form-container'>
                    <div className='form-head'>Add New Employee</div>
                    <div className='form-body'>
                        <form>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Date Of Birth</label>
                                    <input type="date" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Status</label>
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Active</option>
                                        <option value="1">Inactive</option>
                                    </select>
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Branch</label>
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Borivali</option>
                                        <option value="1">Branch 2</option>
                                        <option value="2">Branch 3</option>
                                        <option value="3">Branch n</option>
                                    </select>
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Gender</label>
                                    <div className='d-flex'>
                                        <div className="form-check me-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Male
                                            </label></div>
                                        <div className="form-check ">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div></Col>

                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Employee Role</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" />
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

export default AddNewEmp;